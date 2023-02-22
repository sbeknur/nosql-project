import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch("/cinemas/countByCity?cities=Astana,Almaty,Karagandy");

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img src="https://all.accor.com/magazine/imagerie/1-619b.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Astana</h1>
                            <h2>{data[0]} cinemas</h2>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img src="https://time.kz/files/000/013/JdBU0Nq1814.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Almaty</h1>
                            <h2>{data[1]} cinemas</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src="https://znatokstran.ru/wp-content/uploads/2020/01/gde-nahoditsya-karaganda-na-karte-1.jpg"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Karagandy</h1>
                            <h2>{data[2]} cinemas</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Featured;
