import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div>
          {/* Hero Section */}
          <section className="text-center py-16">
              <div className="container mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image
                      src="/hero.jpg"
                      alt="Hero Image"
                      width={1000}
                      height={400}
                  />
              </div>
          </section>

        {/* Description */}
        <section className="bg-gray-100 py-8 px-4">
          <div className="container mx-auto">
            <p className="text-center text-lg text-gray-800">
              Welcome to Secrets, your safe space for personal reflection and anonymous sharing. Dive into your thoughts, journal your heart out, and if you feel inclined, share your secrets with others anonymously. Embrace the cathartic power of writing while connecting with a community of fellow seekers who understand the value of anonymity and the freedom it brings. Join us on a journey of self-discovery and mutual support, where your secrets are heard, respected, and cherished.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-8">
          <button className="bg-black text-white py-3 px-6 rounded-lg">Start Journaling</button>
        </footer>
      </div>
  );
}
