"use client";

import { BlogType } from "@/types/blog.type";

interface BlogActionProps {
  blog: BlogType;
}

export const BlogAction = ({ blog }: BlogActionProps) => {
  // const userId = useUserStore((state) => state.user?.id);
  // const [isLiked, setIsLiked] = useState(
  //   blog.likes.some((like) => like.user.id === userId),
  // );
  // const [likeCount, setLikeCount] = useState(blog.likes.length);
  // const currentUserLikeId = useMemo(() => {
  //   return blog.likes.find((like) => like.user.id === userId)?.id;
  // }, [blog.likes, userId]);
  // const toast = useToast();
  // const router = useRouter();
  //
  // useEffect(() => {
  //   setIsLiked(blog.likes.some((like) => like.user.id === userId));
  // }, [blog.likes, userId]);
  //
  // const handleLike = async () => {
  //   if (!userId) {
  //     router.push("/auth/login");
  //     toast.toast({
  //       title: "You need to login to like this blog",
  //       variant: "destructive",
  //     });
  //     return;
  //   }
  //   try {
  //     if (!isLiked) {
  //       await blogService.likeBlog(blog.id);
  //     } else {
  //       if (!currentUserLikeId) return;
  //       await blogService.unlikeBlog(currentUserLikeId);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setIsLiked(!isLiked);
  //     setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  //   }
  // };
  //
  // return (
  //   <div className="mt-5 flex w-full items-center justify-start gap-3">
  //     <div className="flex items-center gap-1">
  //       <Heart
  //         className="cursor-pointer"
  //         fill={isLiked ? "black" : "none"}
  //         onClick={handleLike}
  //       />
  //       <span>{likeCount}</span>
  //     </div>
  //     <div className="flex items-center gap-1">
  //       <Eye />
  //       <span>{blog?.view && blog.view}</span>
  //     </div>
  //   </div>
  // );

  return <div>

  </div>
};
