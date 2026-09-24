import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/features/(app)/(ui)/shadcn/ui/accordion";
import { Crown } from "lucide-react";
import Link from "next/link";

export function AccordionVip() {
    return (
        <Accordion
            hiddenUntilFound={true}
            // defaultValue="shipping"
            className="vip-accordion">
            <AccordionItem value="shipping">
                <AccordionTrigger className="upgrade-vip-btn">
                    <Crown size={16} strokeWidth="2.2" />
                    Upgrade to VIP
                </AccordionTrigger>
                <AccordionContent className="vip-trigger-content">
                    <Link href="/vip">Upgrade now!</Link>
                    <Link href="/vip">Transaction history</Link>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
