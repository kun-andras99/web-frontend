import {
    GalleryType,
    GalleryVisibility,
} from "../../../prisma/generated/prisma";

export interface ProfileGalleryImage {
    id: string;
    url: string;
    uploadedAt: Date;
}

export interface ProfileGallery {
    id: string;
    name: string;
    type: GalleryType;
    visibility: GalleryVisibility;
    images: ProfileGalleryImage[];
}
