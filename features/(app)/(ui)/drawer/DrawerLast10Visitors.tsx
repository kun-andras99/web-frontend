import Image from "next/image";

export default function DrawerLast10Visitors() {
    return Array.from({ length: 10 }).map((_, index) => (
        <div className="cruise-group-10__container" key={index}>
            <Image
                src={`/assets/images/user-blank-5.png`}
                width={74}
                height={74}
                alt=""
            />
            <p>nickname</p>
        </div>
    ));
}
