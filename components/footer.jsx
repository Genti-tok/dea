import Link from "next/link";


export default function Footer() {
    return (
        <footer className="w-full container text-[#EAEAEA] font-libre">
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                <div className="flex socials flex-wrap">
                    <p>linkedin</p>
                    <p>behance</p>
                    <p>dribble</p>
                    <p>instagram</p>
                </div>
                <div className="flex mail">
                    <Link href="deaimeraj99@gmail.com">
                    <a>deaimeraj99@gmail.com</a>
                    </Link>
                    
                </div>
                <div className="flex"></div>
                </div>
                <div></div>
            </div>
        </footer>
    );
}
    