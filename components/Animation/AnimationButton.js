"use client";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

const AnimationButton = ({ buttonText }) => {
    const handleClick = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#b8860b", "#006400", "#0a0a0a", "#8b008b", "#0000"];


        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };
    return (
        <div className="relative">
            <Button onClick={handleClick}>{buttonText}</Button>
        </div>
    )
}

export default AnimationButton
