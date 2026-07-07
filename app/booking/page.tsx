import type { Metadata } from "next";
import { BookingClient } from "./booking-client";
export const metadata: Metadata = { title: "Book an intro call" };
export default function BookingPage() { return <BookingClient />; }
