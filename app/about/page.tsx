'use client'

import { Navigation } from "@/components/navigation"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"
import { getSupabaseClient } from "@/lib/supabase-client"

interface Pastor {
  id: number;
  created_at: string;
  name: string;
  position: string;
  description: string;
}

export default function AboutPage() {
  const [newPastors, setNewPastors] = useState<Pastor[]>([]);

  const fetchPastors = async () => {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.from('pasters').select('*');

    if (error) {
      console.error('Error fetching pastors:', error);
      return;
    }

    setNewPastors(data);
  };

  useEffect(() => {
    fetchPastors();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">About Emmanuel Baptist Church</h1>
            <p className="text-xl mt-6 opacity-95">Discovering your place in God's work</p>
          </div>
        </section>

        {/* Church Introduction */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Our Church</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Emmanuel Baptist Church is a congregation rooted in faith...
            </p>
            {/* ...rest of your content */}
          </div>
        </section>

        {/* Leadership & Pastors */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
              {newPastors.map((pastor) => (
                <div key={pastor.id} className="border border-border rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">{pastor.name}</h3>
                  <p className="text-primary font-semibold mb-4">{pastor.position}</p>
                  <p className="text-foreground/70">{pastor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ...rest of your About content */}
      </main>
      <Footer />
    </>
  );
}
