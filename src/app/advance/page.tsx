import AdvancedCalculator from "@/components/AdvancedCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance React Calculator ",
	description: "Advance React Calculator",
};


const page = () => {
    return (
     	<section className="grid h-[80dvh] place-items-center">
			<Card className="w-lg">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Advanced Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<AdvancedCalculator />
				</CardContent>
			</Card>
		</section>
    );
}

export default page;