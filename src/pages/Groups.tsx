import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Search, Users, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Groups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [groups] = useState([
    { id: 1, name: "A1 Guruh", course: "Ingliz tili", teacher: "Jasur Abdullayev", students: 12, schedule: "Du, Chor, Ju" },
    { id: 2, name: "B2 Guruh", course: "Rus tili", teacher: "Nodira Qo'shqarova", students: 10, schedule: "Se, Pay, Shan" },
    { id: 3, name: "C1 Guruh", course: "Nemis tili", teacher: "Sardor Toshmatov", students: 8, schedule: "Du, Se, Chor" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Guruhlar</h1>
          <p className="text-muted-foreground">Barcha guruhlarni boshqarish</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Yangi guruh
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi guruh qo'shish</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="groupName">Guruh nomi</Label>
                <Input id="groupName" placeholder="Masalan: A1 Guruh" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Kurs</Label>
                <Input id="course" placeholder="Kurs tanlang" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher">O'qituvchi</Label>
                <Input id="teacher" placeholder="O'qituvchi tanlang" />
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
              placeholder="Guruhlarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <Card key={group.id} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{group.name}</h3>
                      <p className="text-sm text-muted-foreground">{group.course}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{group.students}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">O'qituvchi</p>
                    <p className="text-sm font-medium text-foreground">{group.teacher}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{group.schedule}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Batafsil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Groups;
