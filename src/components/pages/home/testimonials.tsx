import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div className="container sm:max-w-3xl md:max-w-7xl my-16 flex flex-col gap-14">
				<div className="flex flex-col gap-4 justify-center items-center">
					<h1 className="text-3xl font-bold text-center">Wall of Love</h1>
					<p>Apa kata mereka ❤️</p>
				</div>
				<div className="lg:px-0 max-w-7xl m-auto mb-40">
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="space-y-8">
							<Card>
								<CardContent className="mt-5">
									<p>
										I hope that many people are interested in and join this bootcamp to
										enhance their web development skills, especially those who are
										switching careers, like me, or IT professionals looking to update
										their knowledge in advanced tech stacks such as Next.js and its
										libraries. I take great pleasure in seeing my progress during the
										bootcamp.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Ryan Martjellino</h6>
										<p className="block font-bold">Backend Developer</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardContent className="mt-5">
									<p>
										Ini Bootcamp beneran kayak Gameshark jaman dulu. Dulu saya belajar
										topik yang sama mungkin hitungan tahun ga ngerti-ngerti, ini belajar
										kurang dari 2 bulan langsung ngerti. Tidak masuk akal! ...Saking
										puasnya sama Bootcamp ini, saya udah instruksiin tim saya untuk join
										batch selanjutnya, semoga dia ada waktu dan tenaga buat ikutan.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Nuha Fadh</h6>
										<p className="block font-bold">Entrepreneur</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardContent className="mt-5">
									<p>
										Background saya SEO specialist, ingin tambah ilmu tentang Fullstack JS
										dan ketemulah LearnSphere Indonesia. Dan ini adalah investasi terbaik
										saya di tahun 2023, tidak kecewa karena langsung di mentorin mas Rayhan
										yg gak pelit ilmu dan semangat buat mengajarnya bikin saya gak
										menyerah untuk kejar mimpi saya untuk jadi lebih baik lagi!
										Recommended polll!
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Nurrahma Safitri</h6>
										<p className="block font-bold">SEO Specialist</p>
									</div>
								</CardFooter>
							</Card>
						</div>
						<div className="space-y-8 hidden md:block">
							<Card>
								<CardContent className="mt-5">
									<p>
										Mas Rayhan benar-benar mendedikasikan dirinya sebagai mentor. Beliau
										mengajar dengan penuh semangat sehingga student juga ikut semangat.
										Beliau benar-benar mentor yang kompeten. Materi yang sulit sekalipun
										dapat disampaikan dengan cara yang mudah dipahami.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Jessy Hanifiah</h6>
										<p className="block font-bold">CS Student</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardContent className="mt-5">
									<p>
										keren, bener bener menguasai fundamental, bisa menjelaskan dgn bahasa
										yang mudah, tidak hanya mengajar di kelas lalu selesai, namun juga
										peduli semua peserta bootcampnya, kenal dan paham masalah dan problem
										peserta bootcamp, dan perhatian juag dengan progres tiap peserta.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Hendra Irawan</h6>
										<p className="block font-bold">Santri</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardContent className="mt-5">
									<p>
										Berawal dari iseng-iseng ikutan tanpa ekspektasi apapun, berujung jadi
										salah satu best investment saya. Paling suka sama teman-teman, mentor,
										dan lingkungan LearnSphere yang supportive banget, yang menurut saya
										jarang ada di tempat lain. Thank you LearnSphere!
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Ekmi Gasari</h6>
										<p className="block font-bold">Entrepreneur</p>
									</div>
								</CardFooter>
							</Card>
						</div>
						<div className="space-y-8 hidden lg:block">
							<Card>
								<CardContent className="mt-5">
									<p>
										I wholeheartedly recommend this bootcamp to anyone aspiring to acquire
										fullstack skills. The curriculum focuses on up-to-date materials and
										covers the fundamentals comprehensively. This bootcamp equips
										participants with the necessary knowledge and skills to be competitive
										in the field.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Rizki Adithya</h6>
										<p className="block font-bold">Office Staff</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardContent className="mt-5">
									<p>
										Beyond my expectation. Saya ngerasa beruntung banget bisa ketemu
										bootcamp ini, sebagai seorang yang sudah terjun ke dunia programming
										sebelumnya bootcamp ini bisa bantu boost pemahaman saya bukan hanya
										dari sisi teknikal namun pada sisi fundamental juga. Suprisingly
										materi-materi di bootcamp ini bisa langsung saya implementasi di real
										case di industri. Big thanks buat LearnSphere dan mas Rayhan terutama{" "}
										{":)"}
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Muhammad Renaldy</h6>
										<p className="block font-bold">Tech Lead</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardContent className="mt-5">
									<p>
										Saya sangat bersyukur bisa bergabung di bootcamp ini. Banyak hal baru
										yang saya pelajari. Tiap kelas isinya daging semua. I am not being
										excessive, but that&apos;s how I feel. Mentornya sangat berpengalaman,
										full of knowledge, baik dan peduli dengan student-nya. Sangat worth
										it! Thanks u Mas Rayhan!
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex flex-col gap-2">
										<h6 className="block text-xl">Nurul Insani</h6>
										<p className="block font-bold">Frontend Developer</p>
									</div>
								</CardFooter>
							</Card>
						</div>
					</section>
				</div>
			</div>
  )
}