import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// Interfața pentru datele formularului
export interface MemberFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subscriptionMonths: number;
    startSubscription: string;
    endSubscription: string;
}

export interface MemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: MemberFormData) => void;
    mode: "add" | "edit";
    initialData?: MemberFormData;
}

export default function MemberModal({ isOpen, onClose, onSubmit, mode, initialData }: MemberModalProps) {
    const [formData, setFormData] = useState(
        initialData || {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            subscriptionMonths: 1, // Default value
            startSubscription: "",
            endSubscription: "",
        }
    );

    // Update the form data
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: MemberFormData) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Calculate subscription dates
    const handleSubscriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const months = parseInt(e.target.value, 10) || 1;
        const startDate = new Date();
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + months);

        setFormData((prev: MemberFormData) => ({
            ...prev,
            subscriptionMonths: months,
            startSubscription: startDate.toISOString().split("T")[0],
            endSubscription: endDate.toISOString().split("T")[0],
        }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{mode === "add" ? "Add Member" : "Edit Member"}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-4 py-4">
                    <div className="flex align-center justify-between space-x-4">
                        <div className="flex flex-col space-y-2 w-1/2">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <Input
                                id="firstName"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-2 w-1/2">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <Input
                                id="lastName"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <Input
                            id="email"
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <Input
                            id="phoneNumber"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="subscriptionMonths" className="text-sm font-medium text-gray-700">
                            Subscription Months
                        </label>
                        <Input
                            id="subscriptionMonths"
                            placeholder="Subscription Months"
                            name="subscriptionMonths"
                            type="number"
                            value={formData.subscriptionMonths}
                            onChange={handleSubscriptionChange}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="startSubscription" className="text-sm font-medium text-gray-700">
                            Start Subscription
                        </label>
                        <Input
                            id="startSubscription"
                            placeholder="Start Subscription"
                            name="startSubscription"
                            value={formData.startSubscription}
                            readOnly
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="endSubscription" className="text-sm font-medium text-gray-700">
                            End Subscription
                        </label>
                        <Input
                            id="endSubscription"
                            placeholder="End Subscription"
                            name="endSubscription"
                            value={formData.endSubscription}
                            readOnly
                        />
                    </div>
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        {mode === "add" ? "Add" : "Save"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    );
}
