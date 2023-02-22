import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
    const { data, loading, error } = useFetch("/cinemas/countByType");

    const images = [
        "https://good.kz/wp-content/uploads/2017/05/6.png",
        "https://www.kinopark.kz/static/img/kinopark.png",
        "https://scontent.ftse4-1.fna.fbcdn.net/v/t1.6435-9/50636718_2232581873440524_6247724436833697792_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OQvkEqnAANAAX9tTSNB&_nc_ht=scontent.ftse4-1.fna&oh=00_AfClbI6tNv_S2PcvxWiz7_5ssHuf1jq2xF2myMMhEc9eAA&oe=641DD07A",
        "http://qostanai.ru/upload/000/u1/8/7/kinoteatr-arman-3d-photo-place.jpg",
    ];
    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img src={img} alt="" className="pListImg" />
                                <div className="pListTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>
                                        {data[i]?.count} {data[i]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default PropertyList;
