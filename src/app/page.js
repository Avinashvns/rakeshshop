
import HealthNutrition from "@/components/health";

export default function Home() {
  return (
    <>

      <HealthNutrition />


      {/* Features Section */}
      <section className="py-10 px-6 bg-white ">
        <h2 className="text-center text-3xl font-bold text-[var(--color-primary)] mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[var(--color-primary-light)] rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Wide Selection</h3>
            <p>We offer a vast variety of grocery items to meet all your needs.</p>
          </div>
          <div className="p-6 bg-[var(--color-primary-light)] rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Affordable Prices</h3>
            <p>Get the best deals on high-quality products at unbeatable prices.</p>
          </div>
          <div className="p-6 bg-[var(--color-primary-light)] rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
            <p>Enjoy quick delivery so you can get your groceries delivered to your door.</p>
          </div>
        </div>
      </section>
      <br />

      {/* CTA Section */}
      <section className="bg-[var(--color-primary)] text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
        <p className="mb-6">Start shopping and make life easier with RakeshShop.</p>
        <button className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary-hover)] text-white py-2 px-6 rounded-lg">
          Explore Now
        </button>
      </section>

    </>
  );
}
