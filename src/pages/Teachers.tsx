import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Teachers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [teachers] = useState([
    { id: 1, name: "Jasur Abdullayev", phone: "+998 90 111 22 33", subject: "Ingliz tili", groups: 5 },
    { id: 2, name: "Nodira Qo'shqarova", phone: "+998 91 222 33 44", subject: "Rus tili", groups: 3 },
    { id: 3, name: "Sardor Toshmatov", phone: "+998 93 333 44 55", subject: "Nemis tili", groups: 4 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">O'qituvchilar</h1>
          <p className="text-muted-foreground">Barcha o'qituvchilarni boshqarish</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Yangi o'qituvchi
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi o'qituvchi qo'shish</DialogTitle>
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
                <Label htmlFor="subject">Fan</Label>
                <Input id="subject" placeholder="Fan nomi" />
              </div>
              <Button className="w-full">Saqlash</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-border shadow-sm">
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="O'qituvchilarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ism</TableHead>
                <TableHead>Telefon</TableHead>
                <TableHead>Fan</TableHead>
                <TableHead>Guruhlar</TableHead>
                <TableHead className="text-right">Amallar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                  <TableCell>{teacher.phone}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.groups} ta guruh</TableCell>
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

export default Teachers;
