import { redirect } from 'next/navigation';

const Page = () => {
  const language =
    navigator.languages?.[0].split("-")[0] ||
    navigator.language.split("-")[0] ||
    'en';
  language == "hr" ? redirect("/hr") : redirect("/en")
}

export default Page