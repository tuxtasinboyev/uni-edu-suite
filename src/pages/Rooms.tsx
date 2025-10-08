import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, Search, DoorOpen, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rooms] = useState([
    { id: 1, name: "Xona 101", capacity: 15, status: "Bo'sh", floor: 1 },
    { id: 2, name: "Xona 102", capacity: 20, status: "Band", floor: 1 },
    { id: 3, name: "Xona 201", capacity: 12, status: "Bo'sh", floor: 2 },
    { id: 4, name: "Xona 202", capacity: 18, status: "Bo'sh", floor: 2 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Xonalar</h1>
          <p className="text-muted-foreground">Barcha xonalarni boshqarish</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Yangi xona
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi xona qo'shish</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="roomName">Xona nomi</Label>
                <Input id="roomName" placeholder="Masalan: Xona 101" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Sig'im</Label>
                <Input id="capacity" type="number" placeholder="O'quvchilar soni" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="floor">Qavat</Label>
                <Input id="floor" type="number" placeholder="Qavat raqami" />
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
              placeholder="Xonalarni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room) => (
              <Card key={room.id} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <DoorOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{room.name}</h3>
                        <p className="text-xs text-muted-foreground">{room.floor}-qavat</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Sig'im: <span className="font-medium text-foreground">{room.capacity}</span>
                    </span>
                  </div>
                  <div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        room.status === "Bo'sh"
                          ? "bg-primary/10 text-primary"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {room.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rooms;
