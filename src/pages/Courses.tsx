import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Search, BookOpen, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses] = useState([
    { id: 1, name: "Ingliz tili", level: "Beginner - Advanced", duration: "6 oy", groups: 8, description: "Ingliz tilini 0 dan boshlab o'rganish" },
    { id: 2, name: "Rus tili", level: "Beginner - Intermediate", duration: "4 oy", groups: 5, description: "Rus tilini amaliy o'rganish" },
    { id: 3, name: "Nemis tili", level: "Beginner - Advanced", duration: "8 oy", groups: 3, description: "Nemis tilini chuqur o'rganish" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Kurslar</h1>
          <p className="text-muted-foreground">Barcha kurslarni boshqarish</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Yangi kurs
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi kurs qo'shish</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="courseName">Kurs nomi</Label>
                <Input id="courseName" placeholder="Masalan: Ingliz tili" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Daraja</Label>
                <Input id="level" placeholder="Masalan: Beginner - Advanced" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Davomiyligi</Label>
                <Input id="duration" placeholder="Masalan: 6 oy" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Tavsif</Label>
                <Textarea id="description" placeholder="Kurs haqida qisqacha ma'lumot" />
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
              placeholder="Kurslarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">{course.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.level}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Guruhlar: </span>
                    <span className="font-medium text-foreground">{course.groups} ta</span>
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

export default Courses;
