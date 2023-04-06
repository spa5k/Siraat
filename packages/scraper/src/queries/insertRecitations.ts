import { db } from '../db.js';

export async function generateRecitations(reciter: string, quality: string): Promise<void> {
	for (let surah = 1; surah <= 114; surah++) {
		const ayahs = ayahCount[surah - 1];
		for (let ayah = 1; ayah <= ayahs; ayah++) {
			await db.insertInto('recitations').values({
				ayahNumber: ayah,
				recitationQuality: quality,
				reciterName: reciter,
				surahNumber: surah,
				downloaded: 0,
			}).execute();
		}
	}
}
const ayahCount = [
	7,
	286,
	200,
	176,
	120,
	165,
	206,
	75,
	129,
	109,
	123,
	111,
	43,
	52,
	99,
	128,
	111,
	110,
	98,
	135,
	112,
	78,
	118,
	64,
	77,
	227,
	93,
	88,
	69,
	60,
	34,
	30,
	73,
	54,
	45,
	83,
	182,
	88,
	75,
	85,
	54,
	53,
	89,
	59,
	37,
	35,
	38,
	29,
	18,
	45,
	60,
	49,
	62,
	55,
	78,
	96,
	29,
	22,
	24,
	13,
	14,
	11,
	11,
	18,
	12,
	12,
	30,
	52,
	52,
	44,
	28,
	28,
	20,
	56,
	40,
	31,
	50,
	40,
	46,
	42,
	29,
	19,
	36,
	25,
	22,
	17,
	19,
	26,
	30,
	20,
	15,
	21,
	11,
	8,
	8,
	19,
	5,
	8,
	8,
	11,
	11,
	8,
	3,
	9,
	5,
	4,
	7,
	3,
	6,
	3,
	5,
	4,
	5,
	6,
];

export function insertRecitations(): void {
	generateAllRecitations(reciters, ayahCount);
}

export function generateAllRecitations(reciters: Record<string, { name: string; subfolder: string; bitrate: string; }>, ayahCount: number[]): void {
	const names = new Map<string, string[]>();
	Object.values(reciters).forEach(({ name, bitrate }) => {
		if (names.has(name)) {
			names.get(name)?.push(bitrate);
		} else {
			names.set(name, [bitrate]);
		}
	});
	console.log(names);
	// Iterate over all names, then their quality and call generateRecitations for each
	for (const [name, qualities] of names) {
		// put qualities into a json stringified array
		const qualitiesString = JSON.stringify(qualities);
		generateRecitations(name, qualitiesString);
	}
}

const reciters = {
	'1': {
		'subfolder': 'Abdul_Basit_Murattal_64kbps',
		'name': 'Abdul Basit Murattal',
		'bitrate': '64kbps',
	},
	'2': {
		'subfolder': 'Abdul_Basit_Murattal_192kbps',
		'name': 'Abdul Basit Murattal',
		'bitrate': '192kbps',
	},
	'3': {
		'subfolder': 'Abdul_Basit_Mujawwad_128kbps',
		'name': 'Abdul Basit Mujawwad',
		'bitrate': '128kbps',
	},
	'4': {
		'subfolder': 'Abdullah_Basfar_32kbps',
		'name': 'Abdullah Basfar',
		'bitrate': '32kbps',
	},
	'5': {
		'subfolder': 'Abdullah_Basfar_64kbps',
		'name': 'Abdullah Basfar',
		'bitrate': '64kbps',
	},
	'6': {
		'subfolder': 'Abdullah_Basfar_192kbps',
		'name': 'Abdullah Basfar',
		'bitrate': '192kbps',
	},
	'7': {
		'subfolder': 'Abdurrahmaan_As-Sudais_64kbps',
		'name': 'Abdurrahmaan As-Sudais',
		'bitrate': '64kbps',
	},
	'8': {
		'subfolder': 'Abdurrahmaan_As-Sudais_192kbps',
		'name': 'Abdurrahmaan As-Sudais',
		'bitrate': '192kbps',
	},
	'9': {
		'subfolder': 'AbdulSamad_64kbps_QuranExplorer.Com',
		'name': 'AbdulSamad QuranExplorer.Com',
		'bitrate': '64kbps',
	},
	'10': {
		'subfolder': 'Abu_Bakr_Ash-Shaatree_64kbps',
		'name': 'Abu Bakr Ash-Shaatree',
		'bitrate': '64kbps',
	},
	'11': {
		'subfolder': 'Abu_Bakr_Ash-Shaatree_128kbps',
		'name': 'Abu Bakr Ash-Shaatree',
		'bitrate': '128kbps',
	},
	'12': {
		'subfolder': 'Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com',
		'name': 'Ahmed ibn Ali al-Ajamy QuranExplorer.Com',
		'bitrate': '64kbps',
	},
	'13': {
		'subfolder': 'Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net',
		'name': 'Ahmed ibn Ali al-Ajamy KetabAllah.Net',
		'bitrate': '128kbps',
	},
	'14': {
		'subfolder': 'Alafasy_64kbps',
		'name': 'Alafasy',
		'bitrate': '64kbps',
	},
	'15': {
		'subfolder': 'Alafasy_128kbps',
		'name': 'Alafasy',
		'bitrate': '128kbps',
	},
	'16': {
		'subfolder': 'Ghamadi_40kbps',
		'name': 'Ghamadi',
		'bitrate': '40kbps',
	},
	'17': {
		'subfolder': 'Hani_Rifai_64kbps',
		'name': 'Hani Rifai',
		'bitrate': '64kbps',
	},
	'18': {
		'subfolder': 'Hani_Rifai_192kbps',
		'name': 'Hani Rifai',
		'bitrate': '192kbps',
	},
	'19': {
		'subfolder': 'Husary_64kbps',
		'name': 'Husary',
		'bitrate': '64kbps',
	},
	'20': {
		'subfolder': 'Husary_128kbps',
		'name': 'Husary',
		'bitrate': '128kbps',
	},
	'21': {
		'subfolder': 'Husary_Mujawwad_64kbps',
		'name': 'Husary Mujawwad',
		'bitrate': '64kbps',
	},
	'22': {
		'subfolder': 'Husary_128kbps_Mujawwad',
		'name': 'Husary Mujawwad',
		'bitrate': '128kbps',
	},
	'23': {
		'subfolder': 'Hudhaify_32kbps',
		'name': 'Hudhaify',
		'bitrate': '32kbps',
	},
	'24': {
		'subfolder': 'Hudhaify_64kbps',
		'name': 'Hudhaify',
		'bitrate': '64kbps',
	},
	'25': {
		'subfolder': 'Hudhaify_128kbps',
		'name': 'Hudhaify',
		'bitrate': '128kbps',
	},
	'26': {
		'subfolder': 'Ibrahim_Akhdar_32kbps',
		'name': 'Ibrahim Akhdar',
		'bitrate': '32kbps',
	},
	'27': {
		'subfolder': 'Ibrahim_Akhdar_64kbps',
		'name': 'Ibrahim Akhdar',
		'bitrate': '64kbps',
	},
	'28': {
		'subfolder': 'Maher_AlMuaiqly_64kbps',
		'name': 'Maher Al Muaiqly',
		'bitrate': '64kbps',
	},
	'29': {
		'subfolder': 'MaherAlMuaiqly128kbps',
		'name': 'Maher Al Muaiqly',
		'bitrate': '128kbps',
	},
	'30': {
		'subfolder': 'Menshawi_16kbps',
		'name': 'Menshawi',
		'bitrate': '16kbps',
	},
	'31': {
		'subfolder': 'Menshawi_32kbps',
		'name': 'Menshawi',
		'bitrate': '32kbps',
	},
	'32': {
		'subfolder': 'Minshawy_Mujawwad_64kbps',
		'name': 'Minshawy Mujawwad',
		'bitrate': '64kbps',
	},
	'33': {
		'subfolder': 'Minshawy_Mujawwad_192kbps',
		'name': 'Minshawy Mujawwad',
		'bitrate': '192kbps',
	},
	'34': {
		'subfolder': 'Minshawy_Murattal_128kbps',
		'name': 'Minshawy Murattal',
		'bitrate': '128kbps',
	},
	'35': {
		'subfolder': 'Mohammad_al_Tablaway_64kbps',
		'name': 'Mohammad al Tablaway',
		'bitrate': '64kbps',
	},
	'36': {
		'subfolder': 'Mohammad_al_Tablaway_128kbps',
		'name': 'Mohammad al Tablaway',
		'bitrate': '128kbps',
	},
	'37': {
		'subfolder': 'Muhammad_Ayyoub_128kbps',
		'name': 'Muhammad Ayyoub',
		'bitrate': '128kbps',
	},
	'38': {
		'subfolder': 'Muhammad_Ayyoub_64kbps',
		'name': 'Muhammad Ayyoub',
		'bitrate': '64kbps',
	},
	'39': {
		'subfolder': 'Muhammad_Ayyoub_32kbps',
		'name': 'Muhammad Ayyoub',
		'bitrate': '32kbps',
	},
	'40': {
		'subfolder': 'Muhammad_Jibreel_64kbps',
		'name': 'Muhammad Jibreel',
		'bitrate': '64kbps',
	},
	'41': {
		'subfolder': 'Muhammad_Jibreel_128kbps',
		'name': 'Muhammad Jibreel',
		'bitrate': '128kbps',
	},
	'42': {
		'subfolder': 'Mustafa_Ismail_48kbps',
		'name': 'Mustafa Ismail',
		'bitrate': '48kbps',
	},
	'43': {
		'subfolder': 'Saood_ash-Shuraym_64kbps',
		'name': 'Saood bin Ibraaheem Ash-Shuraym',
		'bitrate': '64kbps',
	},
	'44': {
		'subfolder': 'Saood_ash-Shuraym_128kbps',
		'name': 'Saood bin Ibraaheem Ash-Shuraym',
		'bitrate': '128kbps',
	},
	'45': {
		'subfolder': 'English\/Sahih_Intnl_Ibrahim_Walk_192kbps',
		'name': '(English) Translated by Sahih International Recited by Ibrahim Walk',
		'bitrate': '192kbps',
	},
	'46': {
		'subfolder': 'MultiLanguage\/Basfar_Walk_192kbps',
		'name': 'MultiLanguage\/Basfar Walk',
		'bitrate': '192kbps',
	},
	'47': {
		'subfolder': 'translations\/Makarem_Kabiri_16Kbps',
		'name': '(Persian) Translated by Makarem Recited by Kabiri',
		'bitrate': '64Kbps',
	},
	'48': {
		'subfolder': 'translations\/Fooladvand_Hedayatfar_40Kbps',
		'name': '(Persian) Translated by Fooladvand Recited by Hedayatfar',
		'bitrate': '64Kbps',
	},
	'49': {
		'subfolder': 'Parhizgar_48kbps',
		'name': 'Parhizgar_64Kbps',
		'bitrate': '64Kbps',
	},
	'50': {
		'subfolder': 'translations\/azerbaijani\/balayev',
		'name': 'Balayev',
		'bitrate': '64Kbps',
	},
	'51': {
		'subfolder': 'Salaah_AbdulRahman_Bukhatir_128kbps',
		'name': 'Salaah AbdulRahman Bukhatir',
		'bitrate': '128kbps',
	},
	'52': {
		'subfolder': 'Muhsin_Al_Qasim_192kbps',
		'name': 'Muhsin Al Qasim',
		'bitrate': '192kbps',
	},
	'53': {
		'subfolder': 'Abdullaah_3awwaad_Al-Juhaynee_128kbps',
		'name': 'Abdullaah 3awwaad Al-Juhaynee',
		'bitrate': '128kbps',
	},
	'54': {
		'subfolder': 'Salah_Al_Budair_128kbps',
		'name': 'Salah Al Budair',
		'bitrate': '128kbps',
	},
	'55': {
		'subfolder': 'Abdullah_Matroud_128kbps',
		'name': 'Abdullah Matroud',
		'bitrate': '128kbps',
	},
	'56': {
		'subfolder': 'Ahmed_Neana_128kbps',
		'name': 'Ahmed Neana',
		'bitrate': '128kbps',
	},
	'57': {
		'subfolder': 'Muhammad_AbdulKareem_128kbps',
		'name': 'Muhammad AbdulKareem',
		'bitrate': '128kbps',
	},
	'58': {
		'subfolder': 'khalefa_al_tunaiji_64kbps',
		'name': 'Khalefa Al-Tunaiji',
		'bitrate': '64kbps',
	},
	'59': {
		'subfolder': 'mahmoud_ali_al_banna_32kbps',
		'name': 'Mahmoud Ali Al-Banna',
		'bitrate': '32kbps',
	},
	'60': {
		'subfolder': 'warsh\/warsh_ibrahim_aldosary_128kbps',
		'name': '(Warsh) Ibrahim Al-Dosary',
		'bitrate': '128kbps',
	},
	'61': {
		'subfolder': 'warsh\/warsh_yassin_al_jazaery_64kbps',
		'name': '(Warsh) Yassin Al-Jazaery',
		'bitrate': '64kbps',
	},
	'62': {
		'subfolder': 'warsh\/warsh_Abdul_Basit_128kbps',
		'name': '(Warsh) Abdul Basit',
		'bitrate': '128kbps',
	},
	'63': {
		'subfolder': 'translations/urdu_shamshad_ali_khan_46kbps',
		'name': '(Urdu) Shamshad Ali Khan',
		'bitrate': '46kbps',
	},
	'64': {
		'subfolder': 'Karim_Mansoori_40kbps',
		'name': 'Karim Mansoori (Iran)',
		'bitrate': '40kbps',
	},
	'65': {
		'subfolder': 'Husary_Muallim_128kbps',
		'name': 'Husary (Muallim)',
		'bitrate': '128kbps',
	},
	'66': {
		'subfolder': 'Khaalid_Abdullaah_al-Qahtaanee_192kbps',
		'name': 'Khalid Abdullah al-Qahtanee',
		'bitrate': '192kbps',
	},
	'67': {
		'subfolder': 'Yasser_Ad-Dussary_128kbps',
		'name': 'Yasser_Ad-Dussary',
		'bitrate': '128kbps',
	},
	'68': {
		'subfolder': 'Nasser_Alqatami_128kbps',
		'name': 'Nasser_Alqatami',
		'bitrate': '128kbps',
	},
	'69': {
		'subfolder': 'Ali_Hajjaj_AlSuesy_128kbps',
		'name': 'Ali_Hajjaj_AlSuesy',
		'bitrate': '128kbps',
	},
	'70': {
		'subfolder': 'Sahl_Yassin_128kbps',
		'name': 'Sahl_Yassin',
		'bitrate': '128kbps',
	},
	'71': {
		'subfolder': 'ahmed_ibn_ali_al_ajamy_128kbps',
		'name': 'Ahmed Ibn Ali Al Ajamy',
		'bitrate': '128kbps',
	},
	'72': {
		'subfolder': 'translations/besim_korkut_ajet_po_ajet',
		'name': 'Besim Korkut (Bosnian)',
		'bitrate': '128kbps',
	},
	'73': {
		'subfolder': 'aziz_alili_128kbps',
		'name': 'Aziz Alili',
		'bitrate': '128kbps',
	},
	'74': {
		'subfolder': 'Yaser_Salamah_128kbps',
		'name': 'Yaser Salamah',
		'bitrate': '128kbps',
	},
	'75': {
		'subfolder': 'Akram_AlAlaqimy_128kbps',
		'name': 'Akram Al Alaqimy',
		'bitrate': '128kbps',
	},
	'76': {
		'subfolder': 'Ali_Jaber_64kbps',
		'name': 'Ali Jaber',
		'bitrate': '64kbps',
	},
	'77': {
		'subfolder': 'Fares_Abbad_64kbps',
		'name': 'Fares Abbad',
		'bitrate': '64kbps',
	},
	'78': {
		'subfolder': 'translations/urdu_farhat_hashmi',
		'name': 'Farhat Hashmi (Urdu word for word translation)',
		'bitrate': '32kbps',
	},
	'79': {
		'subfolder': 'Ayman_Sowaid_64kbps',
		'name': 'Ayman Sowaid',
		'bitrate': '64kbps',
	},
};
