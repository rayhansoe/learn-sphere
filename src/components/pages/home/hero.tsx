import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Pic from "../../../../public/images/hero-bootcamp-square.png";

export default function Hero() {
  return (
    <div>
				{/* Hero */}
				<section className="container sm:max-w-3xl lg:max-w-6xl my-12 flex flex-col gap-8">
					{/* section 1 */}
					<div className="flex flex-col gap-8 md:gap-12">
						<h1 className="text-3xl font-bold md:text-5xl lg:text-7xl lg:max-w-5xl">
							Upgrade Cara Belajar Kamu Bersama{" "}
							<span className="text-yellow-500/70 dark:text-amber-200 underline hover:underline-offset-8">
								<span className="text-blue-950 dark:text-white">Learn</span>Sphere
							</span>
						</h1>
						<p className="text-base font-light text-slate-600 dark:text-slate-300 md:text-lg lg:text-xl lg:max-w-4xl">
							Lebih dari 1200+ lulusan program SkillSphere Academy telah mendapatkan
							pekerjaan. Dapatkan potongan subsidi hingga 9 juta rupiah untuk paket
							pelatihan React dan Back-End Developer.
							<br />{" "}
							<span className="font-medium text-black dark:text-white">
								Terbatas untuk 5 peserta!
							</span>
						</p>
					</div>

					{/* section 2 */}
					<div className="flex flex-col gap-8 sm:items-start lg:flex-row lg:justify-between">
						<div className="flex flex-col gap-6">
							<Button variant="default" size="default">
								<Link href={"/"}>Konsultasi Gratis</Link>
							</Button>

							{/* jadwal */}
							<div>
								<h4 className="font-bold">Pendaftaran Batch 2</h4>
								<p>2 Oktober 2023 - 9 Februari 2024</p>
							</div>
							<div>
								<h4 className="font-bold">Pelaksanaan Batch 2</h4>
								<p>16 Februari - 30 Juni 2024</p>
							</div>
						</div>

						{/* Image */}
							<Image src={Pic} alt={"hero bootcamp square"} width={694} height={556} priority />
						{/* <div className="items-end w-full h-auto">
						</div> */}
					</div>
				</section>
			</div>
  )
}