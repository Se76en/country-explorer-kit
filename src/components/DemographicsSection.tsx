import { TrendingUp, TrendingDown, Users, ArrowRightLeft, BarChart3, Map } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";

const DemographicsSection = () => {
  const populationData = [
    { year: "2018", natalitate: 11.3, mortalitate: 9.1 },
    { year: "2019", natalitate: 11.2, mortalitate: 9.2 },
    { year: "2020", natalitate: 10.9, mortalitate: 9.9 },
    { year: "2021", natalitate: 10.9, mortalitate: 9.7 },
    { year: "2022", natalitate: 10.7, mortalitate: 9.5 },
    { year: "2023", natalitate: 10.4, mortalitate: 9.6 },
  ];

  const indicators = [
    {
      icon: TrendingUp,
      label: "Natalitatea",
      value: "10.4‰",
      description: "Rata nașterilor pe 1.000 de locuitori (2023). Franța menține una dintre cele mai ridicate rate din UE datorită politicilor familiale generoase.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: TrendingDown,
      label: "Mortalitatea",
      value: "9.6‰",
      description: "Rata deceselor pe 1.000 de locuitori (2023). Speranța de viață este de 82.5 ani (85.3 femei, 79.4 bărbați).",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: BarChart3,
      label: "Sporul Natural",
      value: "+0.8‰",
      description: "Diferența natalitate - mortalitate (10.4 - 9.6 = 0.8‰). Sporul este POZITIV, ceea ce înseamnă că populația crește natural.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const migrationData = [
    { type: "Imigrare", value: 316000, description: "persoane/an (2023)" },
    { type: "Emigrare", value: 167000, description: "persoane/an (2023)" },
    { type: "Sold migrator", value: 149000, description: "persoane/an (net pozitiv)" },
  ];

  return (
    <section id="demographics" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-3">
            Secțiunea II
          </p>
          <h2 className="section-title mb-4">Indicatori Demografici</h2>
          <div className="tricolor-bar max-w-24 mx-auto" />
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {indicators.map((item, index) => (
            <div 
              key={item.label}
              className="card-elevated animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg ${item.bgColor} mb-4`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <p className="stat-label mb-2">{item.label}</p>
              <p className={`stat-value ${item.color} mb-3`}>{item.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="card-elevated mb-12 animate-fade-up animation-delay-400">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Evoluția Natalității și Mortalității (2018-2023)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={populationData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  domain={[8, 12]}
                  tickFormatter={(value) => `${value}‰`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-card)'
                  }}
                  formatter={(value: number) => [`${value}‰`, '']}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="natalitate" 
                  name="Natalitate"
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mortalitate" 
                  name="Mortalitate"
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-muted-foreground text-sm mt-4 text-center">
            Sursa: INSEE (Institut national de la statistique et des études économiques)
          </p>
        </div>

        {/* Migration */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="card-elevated animate-fade-up animation-delay-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <ArrowRightLeft className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  Migrația
                </h3>
                <p className="text-muted-foreground text-sm">Fluxuri de populație</p>
              </div>
            </div>
            <div className="space-y-4">
              {migrationData.map((item) => (
                <div key={item.type} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="font-medium text-foreground">{item.type}</span>
                  <div className="text-right">
                    <span className="font-display text-lg font-semibold text-primary">
                      {item.value.toLocaleString()}
                    </span>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated animate-fade-up animation-delay-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/20">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  Bilanțul Total al Populației
                </h3>
                <p className="text-muted-foreground text-sm">Creștere totală anuală</p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="stat-value text-green-600 mb-2">+202.000</p>
              <p className="text-muted-foreground text-sm mb-4">persoane/an (2023)</p>
              <div className="text-left text-sm text-foreground/90 space-y-1">
                <p>• Spor natural: +53.000</p>
                <p>• Sold migrator: +149.000</p>
                <p className="pt-2 font-medium text-green-600">
                  → Populația Franței CREȘTE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Density */}
        <div className="card-elevated animate-fade-up animation-delay-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Map className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                Densitatea și Repartiția Teritorială
              </h3>
              <p className="text-muted-foreground text-sm">Distribuția populației</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="stat-value text-primary mb-1">124</p>
              <p className="text-sm text-muted-foreground">locuitori/km²</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-foreground/90 leading-relaxed">
                Populația este concentrată în <strong>regiunea Île-de-France</strong> (Paris și împrejurimi) 
                cu peste 12 milioane de locuitori. Alte zone dens populate sunt coasta mediteraneană 
                (Marsilia, Nisa), zona Lyon-Grenoble și coasta atlantică. Zonele montane (Alpi, Pirinei, 
                Masivul Central) și regiunile rurale din centru au densități mult mai scăzute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemographicsSection;
