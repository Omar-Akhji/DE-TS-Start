import { useState } from "react";
import { CardBody } from "./CardBody.tsx";
import { CardModal } from "./CardModal.tsx";

interface CardWithModalProperties {
  href: string;
  title: string;
  subtitle?: string | undefined;
  description?: string | undefined;
  category?: string | undefined;
  badge?: string | undefined;
  gradient: string;
  icon?: string | undefined;
  stats?: Array<{ label: string; value: string }> | undefined;
  variant?: "default" | "large" | undefined;
  previewTitles?: string[] | undefined;
}

const EMPTY_PREVIEW_TITLES: string[] = [];

export const CardWithModal = ({
  href,
  previewTitles = EMPTY_PREVIEW_TITLES,
  ...bodyProperties
}: CardWithModalProperties) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="h-full w-full cursor-pointer border-none bg-transparent p-0 text-left"
        aria-label={`${bodyProperties.title} öffnen`}
      >
        <CardBody {...bodyProperties} />
      </button>

      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={bodyProperties.title}
        subtitle={bodyProperties.category}
        description={bodyProperties.description}
        href={href}
        previewTitles={previewTitles}
      />
    </>
  );
};
