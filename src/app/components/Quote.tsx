import AnimateOnScroll from './AnimateOnScroll';

export default function Quote() {
    return (
        <div className="bg-white text-yellow-700 p-16 my-8 text-center font-mono font-medium text-4xl italic">
            <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
                <p>"Bridging Local Wisdom and Policy for Sustainable Rural Development."</p>
            </AnimateOnScroll>
        </div>
    );
}