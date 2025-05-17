export default function imageLoader({ src }: Readonly<{ src: string }>) {
  return `.${src}`;
}