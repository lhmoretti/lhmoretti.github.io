import { createSignal } from "solid-js";
import { useTranslations, type Lang } from "@i18n/ui";

type Props = {
  data: Array<{ imgUrls: string[] }>;
  lang?: Lang;
};

export default function Certifications({ data, lang = "es" }: Props) {
  const t = useTranslations(lang);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex() + 1) % data[0].imgUrls.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex() - 1 + data[0].imgUrls.length) % data[0].imgUrls.length
    );
  };

  if (data.length === 0 || !data[0].imgUrls) {
    return <div>{t("certs.empty")}</div>;
  }

  return (
    <div class="relative w-full max-w-4xl mx-auto">
      <div class="overflow-hidden rounded-lg shadow-lg">
        <img
          src={data[0].imgUrls[currentIndex()]}
          alt="Certification"
          class="w-full"
        />
      </div>
      <button
        class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
      <div class="text-center mt-4">
        {t("certs.counter", { current: currentIndex() + 1, total: data[0].imgUrls.length })}
      </div>
    </div>
  );
}
