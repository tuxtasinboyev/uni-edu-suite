import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students] = useState([
    { id: 1, name: "Ali Valiyev", phone: "+998 90 123 45 67", group: "A1 Guruh", status: "Faol" },
    { id: 2, name: "Zarina Karimova", phone: "+998 91 234 56 78", group: "B2 Guruh", status: "Faol" },
    { id: 3, name: "Bobur Rahimov", phone: "+998 93 345 67 89", group: "A1 Guruh", status: "Faol" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">O'quvchilar</h1>
          <p className="text-muted-foreground">Barcha o'quvchilarni boshqarish</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Yangi o'quvchi
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi o'quvchi qo'shish</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ism</Label>
                <Input id="name" placeholder="To'liq ism" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" placeholder="+998 90 123 45 67" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="group">Guruh</Label>
                <Input id="group" placeholder="Guruh tanlang" />
              </div>
              <Button className="w-full">Saqlash</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="O'quvchilarni qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ism</TableHead>
                <TableHead>Telefon</TableHead>
                <TableHead>Guruh</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amallar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.group}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
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
  );
};

export default Students;
