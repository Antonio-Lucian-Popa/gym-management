import { ApiResponse, User } from "./user";

const API_BASE_URL = "http://localhost:8081/api/v1";

export const fetchMembers = async (page: number, size: number, search: string): Promise<ApiResponse> => {
    const params = new URLSearchParams({ page: page.toString(), size: size.toString(), search });
    const response = await fetch(`http://localhost:8081/api/v1/member?${params}`);
    if (!response.ok) {
      throw new Error("Failed to fetch members");
    }
    return response.json();
  };

export const addMember = async (member: Partial<User>): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/member`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
    });
    if (!response.ok) {
        throw new Error("Failed to add member");
    }
};

export const updateMember = async (id: string, member: Partial<User>): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/member/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
    });
    if (!response.ok) {
        throw new Error("Failed to update member");
    }
};

export const deleteMember = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/member/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete member");
    }
};
