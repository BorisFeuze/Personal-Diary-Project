import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-full">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-6xl font-bold">What's on your mind?</h1>
                    <p className="py-6">
                    Start writing your thoughts for today.
                    </p>
                    <Link
                        to="/Diary" className="rounded-lg px-3 py-2 text-sm font-medium bg-black text-yellow-50 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
                        Write New Diary
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;