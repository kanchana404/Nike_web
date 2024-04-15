import{
  Hero,
    PopularProduct,
    SuperQuality,
    Service,
    SpecialOffer,
    CustomerReview,
    Subscribe,
    Footer
} from "./Sections";



const app = () => (
  <main className="relative">
    nav
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
    <PopularProduct />
    </section>
    <section className="padding">
    <SuperQuality />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding-x py-10">
     <Service />
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black ">
    <Footer />
    </section>
    
  </main>
)

export default app;