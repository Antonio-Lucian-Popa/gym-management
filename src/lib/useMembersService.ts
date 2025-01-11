import { useCallback, useEffect, useState } from "react";
import { fetchMembers, addMember, updateMember, deleteMember } from "@/lib/api";
import { mapUserToMemberFormData, mapMemberFormDataToUser, User } from "@/lib/user";
import { MemberFormData } from "@/features/components/member-modal/MemberModal";

export const useMembersService = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [currentMember, setCurrentMember] = useState<MemberFormData | undefined>(undefined);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);

  // Fetch data from API
  const fetchData = useCallback(
    async (page: number, size: number, search: string) => {
      setLoading(true);
      try {
        const result = await fetchMembers(page, size, search);
        setData(result.members);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    },
    [page, size]
  );

  // Auto-fetch data on page/size changes
  useEffect(() => {
    fetchData(page, size, "");
  }, [page, size]);

  // Handle editing a member
  const handleEditMember = (user: User) => {
    const memberFormData = mapUserToMemberFormData(user);
    setModalMode("edit");
    console.log("Editing member:", memberFormData);
    setCurrentMember(memberFormData);
    setModalOpen(true);
  };

  const handleAddMember = () => {
    setModalMode("add");
    setModalOpen(true);
  };

  // Handle deleting a member
  const handleDeleteMember = async (id: string) => {
    try {
      await deleteMember(id);
      alert("Member deleted successfully!");
      fetchData(page, size, ""); // Refresh data after delete
    } catch (error) {
      console.error("Failed to delete member:", error);
      alert("Failed to delete member!");
    }
  };

  // Handle submit for add/edit
  const handleSubmit = async (member: MemberFormData) => {
    try {
      if (modalMode === "add") {
        await addMember(member);
      } else if (modalMode === "edit" && currentMember?.id) {
        const user = mapMemberFormDataToUser(member);
        await updateMember(user.id, user);
      }
      fetchData(page, size, ""); // Refresh data after submit
      setModalOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return {
    data,
    loading,
    isModalOpen,
    modalMode,
    currentMember,
    page,
    size,
    setPage,
    setSize,
    fetchData,
    handleEditMember,
    handleAddMember,
    handleDeleteMember,
    handleSubmit,
    setModalOpen,
  };
};
