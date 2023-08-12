"use client";
import { Badge } from "@/src/components/Badge";
import { Card } from "@/src/components/Card";
import Image from "next/image";
import { CaretRight } from "phosphor-react";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* === CARD ONE === */}
      <Card className="relative max-w-xs overflow-hidden rounded-md">
        <Card.Container>
          <Image
            height={204}
            width={373}
            src="/images/banner/blog.jpg"
            alt="blog"
            className="brightness-50"
          />
        </Card.Container>
        <Card.Container className="absolute flex items-start py-3 px-5">
          <Card.Container>
            <Card.Title className="text-xl font-medium text-white">
              Keep design system
            </Card.Title>
            <Card.Description className="text-sm font-normal text-white">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              className="mt-3 flex items-center gap-1 text-sm font-normal text-white"
              href="/"
              icon={<CaretRight size={16} color="#fff" />}
              iconPosition="left"
            >
              Read More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* === CARD TWO === */}
      <Card shadow={false} className="max-w-2xl border-none">
        <Card.Container className="flex items-start border-none">
          <Card.Container>
            <Image
              height={200}
              width={200}
              src="/images/banner/blog2.jpg"
              alt="blog"
              className="rounded-xl"
            />
          </Card.Container>
          <Card.Container className="px-6">
            <Card.Container className="inline-block">
              <Badge colorType="light" color="info">
                Tips & Advice
              </Badge>
            </Card.Container>
            <Card.Title className="text-xl font-medium text-slate-700">
              Keep design system
            </Card.Title>
            <Card.Description className="text-sm font-normal text-slate-500">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

const PostCardCode = `
"use client";
import { Card } from "keep-design";
import Image from "next/image";

const PostCard = () => {
  return (
     <div className="flex flex-col gap-5">
      {/* === CARD ONE === */}
      <Card className="relative max-w-xs overflow-hidden rounded-md">
        <Card.Container>
          <Image
            height={204}
            width={373}
            src="/images/banner/blog.jpg"
            alt="blog"
            className="brightness-50"
          />
        </Card.Container>
        <Card.Container className="absolute flex items-start py-3 px-5">
          <Card.Container>
            <Card.Title className="text-xl font-medium text-white">
              Keep design system
            </Card.Title>
            <Card.Description className="text-sm font-normal text-white">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              className="mt-3 flex items-center gap-1 text-sm font-normal text-white"
              href="/"
              icon={<CaretRight size={16} color="#fff" />}
              iconPosition="left"
            >
              Read More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* === CARD TWO === */}
      <Card shadow={false} className="max-w-2xl border-none">
        <Card.Container className="flex items-start border-none">
          <Card.Container>
            <Image
              height={200}
              width={200}
              src="/images/banner/blog2.jpg"
              alt="blog"
              className="rounded-xl"
            />
          </Card.Container>
          <Card.Container className="px-6">
            <Card.Container className="inline-block">
              <Badge colorType="light" color="info">
                Tips & Advice
              </Badge>
            </Card.Container>
            <Card.Title className="text-xl font-medium text-slate-700">
              Keep design system
            </Card.Title>
            <Card.Description className="text-sm font-normal text-slate-500">
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

export default PostCard;

`;

export { PostCard, PostCardCode };