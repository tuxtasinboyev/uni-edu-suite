import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCog, UsersRound, BookOpen } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "O'quvchilar",
      value: "248",
      icon: Users,
      description: "+12% o'tgan oyga nisbatan",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "O'qituvchilar",
      value: "18",
      icon: UserCog,
      description: "Faol o'qituvchilar",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Guruhlar",
      value: "32",
      icon: UsersRound,
      description: "Faol guruhlar",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Kurslar",
      value: "12",
      icon: BookOpen,
      description: "Mavjud kurslar",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">O'quv markazi statistikasi</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle>So'nggi o'quvchilar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">A{i}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">O'quvchi {i}</p>
                    <p className="text-xs text-muted-foreground">Guruh {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle>Bugungi darslar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">{9 + i}:00</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Guruh {i}</p>
                    <p className="text-xs text-muted-foreground">Xona {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
