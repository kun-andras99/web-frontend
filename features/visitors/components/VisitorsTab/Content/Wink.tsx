import Image from "next/image";

export default function WinkContent() {
    return (
        <div className="wink-content">
            <div className="winks">
                {Array.from({ length: 10 }, (_, index) => (
                    <div className="wink" key={index}>
                        <div className="avatar-pic">
                            <Image
                                src={`https://i.pravatar.cc/400?img=${index + 1}`}
                                alt={`Nickname ${index + 1}`}
                                title={`N`}
                                width={56}
                                height={56}
                                className="pic"
                                loading="lazy"
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="data">
                            <div className="name">
                                <div className="activity" />
                                <span>Nickname {index + 1}</span>
                            </div>
                            <div className="wink">
                                <span>küldött egy ölelést</span>
                            </div>
                            <div className="times">
                                <span>
                                    {index ? `${index * 5} mins` : null}
                                </span>
                            </div>
                        </div>

                        <div className="message"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
