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
    phoneNumber: string;
  email: string;
  subscriptionEnd: string;
  subscriptionStart: string;
};

export const mapUserToMemberFormData = (user: User): MemberFormData => ({
    id: user.id,
    firstName: user.firstName, // Split pentru prenume
    lastName: user.lastName, // Split pentru nume de familie
    email: user.email,
    phoneNumber: user.phoneNumber, // Populează acest câmp cu un default (sau date reale)
    subscriptionStart: user.subscriptionStart, // Populează acest câmp cu un default (sau date reale)
    subscriptionEnd: user.subscriptionEnd,
    subscriptionMonths: 0
});
  
export const mapMemberFormDataToUser = (member: MemberFormData): User => ({
    id: member.id || "",
    firstName: member.firstName,
    lastName: member.lastName,
    email: member.email,
    phoneNumber: member.phoneNumber,
    subscriptionEnd: member.subscriptionEnd,
    subscriptionStart: member.subscriptionStart
  });
  