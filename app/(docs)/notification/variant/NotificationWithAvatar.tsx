"use client";
import { Avatar } from "@/src/components/Avatar/Avatar";
import { Button } from "@/src/components/Button";
import { Notification } from "@/src/components/Notification";

const NotificationWithAvatar = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-[400px]"
      additionalContent={
        <div className="mt-2.5 text-base font-normal text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          <div className="mt-6 flex">
            <Button size="xs" type="primary" color="info">
              Accept
            </Button>
            <Button
              size="xs"
              type="outlineGray"
              color="info"
              customClass="ml-3"
            >
              View Profile
            </Button>
          </div>
        </div>
      }
      infoIcon={
        <div className="h-12 w-12">
          <Avatar shape="round" size="md" img="/images/avatar/avatar-4.png" />
        </div>
      }
    >
      <h3 className="text-xl font-medium text-slate-700">
        Rono Pixel
        <span className="pl-2 text-sm font-medium text-slate-400">
          Product Designer
        </span>
      </h3>
    </Notification>
  );
};

const NotificationWithAvatarCode = `
"use client";
import { Notification,Button,Avatar } from "keep-design";

const NotificationWithAvatar = () => {
  const onDismiss = () => {
    // ONDISMISS ACTION
  };
  return (
    <Notification
      dismiss={false}
      onDismiss={onDismiss}
      className="max-w-[400px]"
      additionalContent={
        <div className="mt-2.5 text-base font-normal text-slate-500">
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          <div className="mt-6 flex">
            <Button size="xs" type="primary" color="info">
              Accept
            </Button>
            <Button
              size="xs"
              type="outlineGray"
              color="info"
              customClass="ml-3"
            >
              View Profile
            </Button>
          </div>
        </div>
      }
      infoIcon={
        <div className="h-10 w-10">
          <Avatar shape="round" img="/assets/images/avatar/avatar-1.png" />
        </div>
      }
    >
      <h3 className="text-xl font-medium text-slate-700">
        Rono Pixel
        <span className="pl-2 text-sm font-medium text-slate-400">
          Product Designer
        </span>
      </h3>
    </Notification>
  );
};

export default NotificationWithAvatar;
`;

export { NotificationWithAvatar, NotificationWithAvatarCode };