import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2, XCircle, Minus } from "lucide-react";

const Attendance = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [students] = useState([
    { id: 1, name: "Ali Valiyev", group: "A1 Guruh", status: "present" },
    { id: 2, name: "Zarina Karimova", group: "A1 Guruh", status: "present" },
    { id: 3, name: "Bobur Rahimov", group: "A1 Guruh", status: "absent" },
    { id: 4, name: "Madina Tosheva", group: "A1 Guruh", status: "late" },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return (
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">Keldi</span>
          </div>
        );
      case "absent":
        return (
          <div className="flex items-center gap-2 text-destructive">
            <XCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Kelmadi</span>
          </div>
        );
      case "late":
        return (
          <div className="flex items-center gap-2 text-accent">
            <Minus className="h-4 w-4" />
            <span className="text-sm font-medium">Kech qoldi</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Yo'qlama</h1>
        <p className="text-muted-foreground">O'quvchilar davomatini boshqarish</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Sana tanlang</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-border"
            />
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>A1 Guruh - Yo'qlama</CardTitle>
              <div className="text-sm text-muted-foreground">
                {date?.toLocaleDateString("uz-UZ")}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>№</TableHead>
                  <TableHead>O'quvchi</TableHead>
                  <TableHead>Guruh</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.group}</TableCell>
                    <TableCell>{getStatusBadge(student.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-accent">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
