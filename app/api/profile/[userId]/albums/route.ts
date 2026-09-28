// import { getCurrentUser } from "@/features/auth/lib/session";
// import { getUserGalleries } from "@/features/user/repositories/user";
// import { NextResponse } from "next/server";

export async function GET() {
    // export async function GET(_request: Request, { params }: RouteContext) {
    //     try {
    //         const { id } = await params;
    //         if (!id) {
    //             return NextResponse.json(
    //                 {
    //                     success: false,
    //                     message: "A felhasználó azonosítója kötelező.",
    //                 },
    //                 {
    //                     status: 400,
    //                 },
    //             );
    //         }
    //         const currentUser = await getCurrentUser();
    //         if (!currentUser) {
    //             return NextResponse.json(
    //                 {
    //                     success: false,
    //                     message: "Bejelentkezés szükséges.",
    //                 },
    //                 {
    //                     status: 401,
    //                 },
    //             );
    //         }
    //         const galleries = await getUserGalleries({
    //             profileUserId: id,
    //             viewerUserId: currentUser.id,
    //         });
    //         return NextResponse.json({
    //             success: true,
    //             data: galleries,
    //         });
    //     } catch (error) {
    //         console.error("[GET /api/users/[id]/galleries]", error);
    //         return NextResponse.json(
    //             {
    //                 success: false,
    //                 message: "A galériák lekérése sikertelen.",
    //             },
    //             {
    //                 status: 500,
    //             },
    //         );
    //     }
}
