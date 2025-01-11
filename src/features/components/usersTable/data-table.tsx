"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";
import MemberModal from "@/features/components/member-modal/MemberModal";
import { useMembersService } from "@/lib/useMembersService";
import { useMemo } from "react";
import { columns as generateColumns } from "./columns";

export function DataTable() {
  const {
    data,
    page,
    size,
    isModalOpen,
    modalMode,
    currentMember,
    setPage,
    //setSize,
    setModalOpen,
    fetchData,
    handleEditMember,
    handleAddMember,
    handleDeleteMember,
    handleSubmit,
  } = useMembersService();

  // Folosim useMemo pentru a memora `columns`
  const columns = useMemo(
    () => generateColumns(handleEditMember, handleDeleteMember),
    [handleEditMember, handleDeleteMember]
  );

  //setSize(10);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      {/* Restul codului rămâne la fel */}
      <div className="flex items-center justify-between py-4">
      <Input
        placeholder="Filter emails..."
        onChange={(event) => fetchData(page, size, event.target.value)}
        className="max-w-sm"
        />
        <Button onClick={() => {
            handleAddMember();
            setModalOpen(true);
        }}>
          <UserPlus /> Add member
        </Button>
        <MemberModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          mode={modalMode}
          initialData={currentMember}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-left px-4 py-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-left px-4 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(Math.max(page - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </Button>
        <span>Page: {page + 1}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page + 1)}
          disabled={data.length < size}
        >
          Next
        </Button>
      </div>
    </div>
  );
}