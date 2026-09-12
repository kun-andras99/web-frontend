import NewsCarousel from "@/features/_components/carousel/news-carousel";

export default function HomeScreen() {
    return (
        <>
            <main>
                <section className="home-news">
                    <NewsCarousel />
                </section>
                <section className="main">
                    <p>main here</p>
                </section>
            </main>
        </>
    );
}
