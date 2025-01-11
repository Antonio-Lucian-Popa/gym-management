import { MemberFormData } from "@/features/components/member-modal/MemberModal";

export type ApiResponse = {
    totalItems: number;
    members: User[];
    totalPages: number;
    currentPage: number;
};
  
export type User = {
  id: string;
  firstName: string;
lastName: string;
  email: string;
  subscription: string;
};

export const mapUserToMemberFormData = (user: User): MemberFormData => ({
    id: user.id,
    firstName: user.firstName.split(" ")[0], // Split pentru prenume
    lastName: user.lastName.split(" ")[1] || "", // Split pentru nume de familie
    email: user.email,
    phoneNumber: "", // Populează acest câmp cu un default (sau date reale)
    subscriptionStart: "", // Populează acest câmp cu un default (sau date reale)
    subscriptionEnd: user.subscription,
    subscriptionMonths: 0
});
  
export const mapMemberFormDataToUser = (member: MemberFormData): User => ({
    id: member.id || "",
    firstName: member.firstName,
    lastName: member.lastName,
    email: member.email,
    subscription: member.subscriptionEnd,
  });
  