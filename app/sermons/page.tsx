
'use client'
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SproutIcon as Spotify, Youtube } from "lucide-react"
import Image from "next/image"
export default function SermonsPage() {
  const sermons = [
    {
      id: 1,
      title: "Faith in the Wilderness",
      speaker: "Pastor David Johnson",
      date: "January 12, 2025",
      audioUrl: "/sermons/sermon-1.mp3",
    },
    {
      id: 2,
      title: "Love Never Fails",
      speaker: "Pastor Mary Williams",
      date: "January 5, 2025",
      audioUrl: "/sermons/sermon-2.mp3",
    },
    {
      id: 3,
      title: "New Year, New Purpose",
      speaker: "Pastor James Brown",
      date: "December 29, 2024",
      audioUrl: "/sermons/sermon-3.mp3",
    },
    {
      id: 4,
      title: "The Gift of Grace",
      speaker: "Pastor David Johnson",
      date: "December 22, 2024",
      audioUrl: "/sermons/sermon-4.mp3",
    },
    {
      id: 5,
      title: "Living as Witnesses",
      speaker: "Pastor Mary Williams",
      date: "December 15, 2024",
      audioUrl: "/sermons/sermon-5.mp3",
    },
  ]

  const platforms = [
    {
      name: "Spotify",
      icon: Spotify,
      description: "Listen to our complete sermon library on Spotify.",
      link: "https://open.spotify.com/show/YOUR_SHOW_ID",
    },
    {
      name: "YouTube",
      icon: Youtube,
      description: "Watch our sermons and worship services on YouTube.",
      link: "https://www.youtube.com/@EmmanuelBaptistChurch",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}

        <section className="bg-primary-gradient text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Sermons & Messages</h1>
            <p className="text-xl mt-6 opacity-95">Growing in faith through God's Word</p>
          </div>
        </section>

        {/* Sermons Playlist */}
       <div className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card */}
          
          <div className="bg-black text-white rounded-xl shadow-xl p-6">
          
            <h2 className="text-3xl font-bold mb-1">Emmanuel Baptist Sermon List – 2025</h2>
            <p className="text-lg mb-4 opacity-90">Preview/Click on sermons to play</p>

            {/* Scrollable List */}
            <div className="max-h-96 overflow-y-auto space-y-4">
              {sermons.map((sermon, index) => (
                <div
                  key={sermon.id}
                  className={`bg-primary/80 rounded-lg p-4 cursor-pointer transition 
  hover:bg-accent hover:text-accent-foreground`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <h3 className="font-semibold text-white">{sermon.title}</h3>
                  <p className="text-sm text-white/90 mb-2">{sermon.speaker}</p>
                  {currentIndex === index && (
                    <audio controls className="w-full mt-2" src={sermon.audioUrl} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Links */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-10 sm:px-6 lg:px-8 ">
            <h2 className="text-3xl font-bold mb-12 text-center">Find Us On Your Favorite Platform</h2>
            <div className="flex flex-wrap  gap-2 justify-around">
             

              <div className="flex-col " >

              <a href="https://open.spotify.com/show/YOUR_SHOW_ID">
                <Image
                className="rounded-2xl cursor-pointer"
                src={"https://s3-alpha.figma.com/hub/file/2734964093/9f5edc36-eb4d-414a-8447-10514f2bc224-cover.png"}
                alt="Platform Image"
                width={108}
                height={108}
                />
              </a>
              <h5 className="mt-2 ml-3 text-2xl">Spotify</h5>
                </div>
              <div className="flex-col " >

              <a href="https://open.spotify.com/show/YOUR_SHOW_ID">
                <Image
                className="rounded-2xl cursor-pointer"
                src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAuAMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgYHBQMEAf/EAEUQAAECBAIECAsFBwUBAAAAAAEAAgMEBREGEgchMVETQWFxkZOx0RQVIiMmMkJUVaHBYnKBgrIXJUNSkuHwMzaUosIW/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADIRAQACAQIEBAQFBAMBAAAAAAABAgMEEQUSMVETITNBFDRSgRUyQmGhIiOR8HGx8cH/2gAMAwEAAhEDEQA/ANxQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQfhNkHk+al2HK+PCadzngLaK2npDaK2npCPhsp7zA6wJyX7HJbseHSnvUDrAs+Hfsclux4fJ+9QOsCeHfscluz88Pk/e4HWt708O/Y5Ldjw+S97l+tb3p4d+0nJbseMJL3uX61qeHftJy27HjCS98l+tb3p4d+0nLbslDnJWI7LDmILzubEBWJraOsHLbs9swWrV+oCAgICAgICAgICD5p+cgyMq+YmHWY3pJ3Bb48dsluWralZvO0M/q1fnKi9wzugwDshsNtXKeNXuDRY8cecbytsWmpSPPq45A3KYkIm24LLCJtuCMIEDcOhBFwbuHQggbbh0IIkDcEESG7gsiBDdwQdmi4nn6TFaOEdHlvagxDfVyHiKh6jRY8sTtG0o+XT0vH7tPplQgVKRhzUq7NDePxB3HlVBkx2x2mluqrvWaTtL7Fo1EBAQEBAQEBAKCj45nXPnYUmD5ENuc8pP9lccMxbVm8+6y0VNqzdVybq0TkSUESVlhAlB6wJWYmtUrAixeVjCVztlpT81ohpa9a9ZfQaDV8t/F0xq+yufxeD6nPx8fd8M1KTMqbTMvFhcr2EBdaZKX/LO7pW9bdJfOSumzZElB5koSiSjC4aNag6HUI9PJ83GbwjRucNvy7FV8Uxb1jJ28kLWU3rFmkKlV4gICAgICAgICDN8XH9/TH5exeg0HoQt9L6UOKSpiSiSssJystHnI7YErDL4j9gHbyLnkyVx15rdGlrVrG9lxlMPUujy4mq3FhRHjif6gO4D2lT31mfPPLi8v+EC2oyZZ5cbzm8by8G7KfJFzRqDn+SOgLenDb288liujtPnaXPOO6hmFpWXtu1rt+F4+8uvwVO77pbHUtGHB1KSLWHUXM8sdBXG/DL188dnO2jtHnWUp3DVKrcsZuhxocOIeJh8gncR7JWuPWZsFuTNG8fy1rqMmKeW6iT0rMSMy6WmoTocVh1tO7fyhXGPJXJWLVlPreLxvD5iV0bIkow7uBD6USnM/sUPiHy8/ZH1PpS11edVYgICAgICAgICDNcXn9/zP5exeg0HoQt9L6UOKSpqQjYucGtBLnGwAG08QWJmI85Yny818lIEthOiumpgB81E9be53E0cg71Q5L31mbljoq72tqMm0dFNmZmfrs+3PmjR3nyIbdjBybgrelMWlx9oT61x4arJI4Kl4ULhqxNlthcshuDWjncVXZOJXmdsUIl9XaZ2xw9fF2C75PCIF/wCbwt3bey08bW/m2n/DXxNR1fPUMES8aFw1GnL31hsRwc13M4Lpi4les8uWramrtE7ZIVaXmqjh6onKHQJhhs+G8anjcd45VYXpi1WPfrHdKtWmaq6T8vK4yoQmpUBk5Cvl162u42HeD3Kpx3vos3LPRBra2nycs9GbPDmOLXAtc0kEHiIV9WYnost9/N5krYd7AZ9KZTmf2KFxD5efsj6n0pa+vOqsQEBAQEBAQEBBmmMD+/5n8vYvQ6D5eFtpfShwypiQ72CpITdYEV4uyWbwn5tg71A4jl5MXLHui6u/Lj27vPGtSM5WHwgfNSvkMAPH7R/zcs6DDFMW/vLOkx8tN+7v0mXl8MUF1QmmXmYrQSOPX6rB9VAzXvq83h16f75ouS058nLXopdWqs3V5jPNPLxm8iE31W7gArfDgx4K7V/yn48VcceSXiGscFwvi+PktfZr6Nq1+LwRO3Mx8Rj6bvClVaco0zwkq8ts7zkJ3qu5CN6zmwY89drfaWMmKuSPNda1Ky2KsPNqcky0zCYS23ravWYfoqnBa2kz+HfpPVBx2thycs9FawJUzI1uHALvMzQ4NwvqDvZP0/FTuIYYyYub3j/pK1VItTfsaQaeJKumPDAEOabwmr+bY76FZ4blm+LlnrHkxpb702n2VcqwSXfwF/uqU5n/AKVC4h8vP2R9T6UtgXnVWICAgICAgICAgzLGB9IJn8vYvQ6D5eFtpfShwybKYkLto8aBKT0XjL2j8AFS8Un+usK/Wz/VEKjIsE9W4DImsR5kFwPGC65HQrPJPh4J29oS7zy45n9ll0kzDuGkpUEhmV0QjiJ1AfXpUDhdY2tZF0Nesmjqmwopj1CM0Oex2SFcXy8ZPPxLHE8sxtijoay87xVe8oVSgbKDpJpcGHwFRgtDYj3cHFsPW1ajz8StuGZZmZxp+jyTvNZR0YTLuHn5Uk5MrYoG4jUenV0LPFax/TZjWR0sqVRHi6vzDYYs2XmiWgcQDrj5Kxxf3MEb+8JVf6sf2XLSiwOkKfGtr4Rw6W/2VXwudr2j9kTR/mmGdX1K7T1gwCfSqU5n/pULiHy8/ZH1PpS2FedVYgICAgICAgICDMMZH0hmeZvYvQ6D5eFtpfShwiVMSF20cxWugz0A7btd+FiFTcUja1bK/Wx5xZUmONMrTXOFvBpoF3MHa/krKY8XBtHvCZMeJj2/ZadI8qYkKSnoflQxeG8jXa+tp5tvyVdwzJta2Of92Q9FbzmsufgSuwKdGiyc6/g4UchzIjjqa7ZYniuu3ENNbJEZK+cw6arFNoi1WjcKwNz525dt82pUm0q7aWbY+r0CpRoUlJxBEgwTmiPbrBdssN9tau+H6a2Pe942meiw0uKaf1S+/RlKFkKdqEQZYbrQmE8ly49nQVx4peJtXHHs56y28xRTYjzVa85zNfhU2S0fZc7V8uxWcf2sMR2hL/Jj+y4aU4wZL0+XB1hznnmAAVZwqu9rWRNHHnMs8cVdJzv4A/3ZJ/df+lQuIfLz9nDU+lLZF51ViAgICAgICAgIMuxofSKZ5m9i9DoPl4W2l9KHCJUxIdjCNRbTq3CMQ2hR/NPO6+w9Kh67D4mGdusI+px8+OdvZ9uP6Y6WqTZ5jfMTOp5HsvHeFy4dn5qeHPWP+nPSZN68vZ0cJ1WWq1NNEqVi8MysBP8AqM4rcoUbWYLYcnjY/wDyXLPjnFbxKKtI0R1TrkanSEXNChvdeO9uxgNr2+Q6VY31Ph4YyX6yk2y8mOL2XL/4GQ8E4Dwyevbbwgy/02tb/Lqq/EcnNzcsf7+6H8XfffaFKqFDfTK9BptQi5YMV7bRmN2sJtdWuPU+LhnJSPOPZMrl58c2r7LPjGrytGpYoNLs2IWZH2P+kzjud5VfosFs+XxsnT/6i4Mc5LeJZytHNIfN1Q1CKw8DK6m3HrRDs6Bf5KRxHPy44pHu66vJtXlj3c3HFVbVK/GMJwMCX8zDI2G209N+hd9Bh8LDG/WfNvp6cuP/AJV0lTHdYNH59LJT7r/0qFxD5efs4an0pbMvOqsQEBAQEBAQEBBlmNT6RzPM3sXoeH/LwttL6UOFdTUhElBfsN1aWr9MdSKr5UYNyjN/EA2EfaH0uqPVYL6bJ4lOitzY7Yrc9VUr+Hp2hx85u+XveHMM1W3X3FWGn1ePPXafKeyViz1yx59Vg0XAF9RdYXtDF/6lD4p+hH1vsv6qUFnulVrc9OeRrAia/wClW/Cv1p2i94VzD+HJ6vTGcZocvmvEmXjbvtvKmajV48Fdo857O+TNXHHl1WrFVZlMN0plFo9mzBZlOX+G3jJ+0frdV2lwX1OTxcnRFw45y257s0KvVgiSgsOj0+lsp91/6VC4h8vP2cNT6UtnXnVWICAgICAgICAgyvGx9I5nmb2L0PD/AEI+620vpQ4JKmpCBKCLXvY8PY5zXtN2uabFp5FiYiY2lifPylcqRjnzBlq1CMVpGXhmNuT95vcqnNw6ebmxSg30sxPNSXtosN3VK2zyLf8AZY4p+hrrP0r+qlCZ7pW200X1ec/8q24X1vCdo/1PnrWPTwHg1DhGE0Ny8O9tiPut4ucrfDw7z5sss00vnvdRYkR8R5fEe573G7nONyTvJVrERWNoTIiIjaHmSsiBKCxaOzfFsp91/YoXEPl5+yPqfSltK86rBAQEBAQEBAQEGX4+guhV9zyDliw2uB38RV9w2++HbtK00lt8eytEqwSpQJRhElBAnoWWF00b1CTkjP8Ahk3Als2TLw0QMvt2XVVxPHe/Lyxv1QtXWZ22hd/H9G+L0/8A5LO9VXw+b6Z/wh+HfsoukyoSU8af4FOS8xkL83AxWuy7NtirThlL0m3PEwmaStqzO8KKTvVsmIkoIkoIErItejKWdGxQyKAckGE9zjuvqCr+JXiuHl77I2qn+3s2JefVogICAgICAgICCu4xoZrEgHQBaagEmH9ocbf83KXo9T4N/PpLvp8vh28+jK4jXQ4j4URpbEYcrmuFiDyheii0WjeOi1iYmN4ed9S2ESUECUH4gg4oboEowiSgiSggSgQ2PixGQoTS+JEcGsa0XLnbglp5YmZYmYiN5bJgTDhoVNc+YAM5MEOi29gDY0dvOV5vW6nx7+XSOisz5fEt5dFpURwEBAQEBAQEBAQCg5FZw5Tqx5U3BtFtYRWGzh3rvh1OXD5Vl1x5r06SrkXRzALyYdSjNbxB0MFTY4pf3rCR8bb3hA6NofxOJ1Q71n8Vv9P8nxk9n5+zaH8TidUO9Z/Fb/T/ACfGT2fh0aQvikTqR3p+K2+n+T42eyJ0Zw/isTqR3p+K2+n+T4yex+zGH8VidSO9PxW30/yfGT2ROi+F8VidSO9PxW30/wAnxs9n5+y6F8Wi9UO9PxW30/yfGT2Sh6L5cPBi1SO5u5sNoPSsTxW+3lWP8sfGW9oWeh4XpdE8uTlwY5FjGiHM/p4vwUHNqcmb80+X7OGTLe/V2hsXByfqAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//2Q=="}
                alt="Platform Image"
                width={138}
                height={138}
                />
              </a>
              <h5 className="mt-2 ml-6 text-2xl">Apple</h5>
                </div>
              <div className="flex-col" >

              <a href="https://www.youtube.com/">
                <Image
                className="rounded-2xl"
                src={"data:image/png;base64,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"}
                alt="Platform Image"
                width={108}
                height={108}
                />
              </a>
              <h5 className="mt-2 ml-2 text-2xl">Youtube</h5>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}