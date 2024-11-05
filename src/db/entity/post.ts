import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum PostStatus {
    PUBLISHED = "published",
    DRAFT = "draft"
}

@Entity()
export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({ type: "text" })
    content: string;

    @Column({
        type: "enum",
        enum: PostStatus,
    })
    status: PostStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}