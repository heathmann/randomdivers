const skull = "https://styles.redditmedia.com/t5_2ya0t/styles/communityIcon_ql5iyxjfuvic1.jpg?format=pjpg&s=c2ffada26a84a71ed5b3ec07bba0a1f825ce9833";

// [category] [name] [image]
const MasterList = [
	[
	// 0 = Primary Weapons
		["AR-23 Liberator", "https://helldivers.wiki.gg/images/4/4b/AR-23_Liberator_Primary_Weaponry.png"],
		["AR-23P Liberator Penetrator", "https://helldivers.wiki.gg/images/c/c3/AR-23P_Liberator_Penetrator_Primary_Weaponry.png"],
		["AR-23C Liberator Concussive", "https://helldivers.wiki.gg/images/5/5d/AR-23C_Liberator_Concussive_Primary_Weaponry.png"],
		["AR-23A Liberator Carbine", "https://helldivers.wiki.gg/images/2/2b/AR-23A_Liberator_Carbine_Primary_Weaponry.png"],
		["AR-61 Tenderizer", "https://helldivers.wiki.gg/images/8/8c/AR-61_Tenderizer_Primary_Weaponry.png"],
		["BR-14 Adjudicator", "https://helldivers.wiki.gg/images/7/72/BR-14_Adjudicator_Primary_Weaponry.png"],
		["R-63 Diligence", "https://helldivers.wiki.gg/images/8/82/R-63_Diligence_Primary_Weaponry.png"],
		["R-63CS Diligence Counter Sniper", "https://helldivers.wiki.gg/images/7/78/R-63CS_Diligence_Counter_Sniper_Primary_Weaponry.png"],
		["MP-98 Knight", "https://helldivers.wiki.gg/images/a/ae/MP-98_Knight_Primary_Weaponry.png"],
		["SMG-37 Defender", "https://helldivers.wiki.gg/images/8/83/SMG-37_Defender_Primary_Weaponry.png"],
		["SMG-72 Pummeler", "https://helldivers.wiki.gg/images/2/2f/SMG-72_Pummeler_Primary_Weaponry.png"],
		["SG-8 Punisher", "https://helldivers.wiki.gg/images/0/0d/SG-8_Punisher_Primary_Weaponry.png"],
		["SG-8S Slugger", "https://helldivers.wiki.gg/images/a/aa/SG-8S_Slugger_Primary_Weaponry.png"],
		["SG-451 Cookout", "https://helldivers.wiki.gg/images/1/1f/SG-451_Cookout_Primary_Weaponry.png"],
		["SG-225 Breaker", "https://helldivers.wiki.gg/images/3/30/SG-225_Breaker_Primary_Weaponry.png"],
		["SG-225SP Breaker Spray & Pray", "https://helldivers.wiki.gg/images/e/ec/SG-225SP_Breaker_Spray%26Pray_Primary_Weaponry.png"],
		["SG-225IE Breaker Incendiary", "https://helldivers.wiki.gg/images/9/99/SG-225IE_Breaker_Incendiary_Primary_Weaponry.png"],
		["CB-9 Exploding Crossbow", "https://helldivers.wiki.gg/images/7/79/CB-9_Exploding_Crossbow_Primary_Weaponry.png"],
		["JAR-5 Dominator", "https://helldivers.wiki.gg/images/9/94/JAR-5_Dominator_Primary_Weaponry.png"],
		["R-36 Eruptor", "https://helldivers.wiki.gg/images/f/f0/R-36_Eruptor_Primary_Weaponry.png"],
		["SG-8P Punisher Plasma", "https://helldivers.wiki.gg/images/c/c9/SG-8P_Punisher_Plasma_Primary_Weaponry.png"],
		["ARC-12 Blitzer", "https://helldivers.wiki.gg/images/f/f5/ARC-12_Blitzer_Primary_Weaponry.png"],
		["LAS-5 Scythe", "https://helldivers.wiki.gg/images/d/d1/LAS-5_Scythe_Primary_Weaponry.png"],
		["LAS-16 Sickle", "https://helldivers.wiki.gg/images/5/57/LAS-16_Sickle_Primary_Weaponry.png"],
		["PLAS-1 Scorcher", "https://helldivers.wiki.gg/images/c/cf/PLAS-1_Scorcher_Primary_Weaponry.png"],
		["PLAS-101 Purifier", "https://helldivers.wiki.gg/images/7/76/PLAS-101_Purifier_Primary_Weaponry.png"],
		["FLAM-66 Torcher", "https://helldivers.wiki.gg/images/9/93/FLAM-66_Torcher_Primary_Weaponry.png"],
		["R-2124 Constitution", "https://helldivers.wiki.gg/images/b/bd/R-2124_Constitution_Primary_Weaponry.png"],
		["SMG-32 Reprimand", "https://helldivers.wiki.gg/images/7/78/SMG-32_Reprimand_Primary_Weaponry.png"],
		["SG-20 Halt", "https://helldivers.wiki.gg/images/7/78/SG-20_Halt_Primary_Weaponry.png"],
		["StA-52 Assault Rifle", "https://helldivers.wiki.gg/images/8/80/StA-52_Assault_Rifle_Primary_Weaponry.png"],
		["PLAS-39 Accelerator Rifle", "https://helldivers.wiki.gg/images/a/a3/PLAS-39_Accelerator_Rifle_Primary_Weaponry.png"],
		["StA-11 SMG", "https://helldivers.wiki.gg/images/f/f7/StA-11_SMG_Primary_Weaponry.png"],
		["LAS-17 Double-Edge Sickle", "https://helldivers.wiki.gg/images/e/e6/LAS-17_Double-Edge_Sickle_Primary_Weaponry.png"],
		["R-6 Deadeye", skull]
	],[
	// 1 = Side Arms
		["P-2 Peacemaker", "https://helldivers.wiki.gg/images/a/af/P-2_Peacemaker_Secondary_Weaponry.png"],
		["P-19 Redeemer", "https://helldivers.wiki.gg/images/2/22/P-19_Redeemer_Secondary_Weaponry.png"],
		["GP-31 Grenade Pistol", "https://helldivers.wiki.gg/images/3/3f/GP-31_Grenade_Pistol_Secondary_Weaponry.png"],
		["P-113 Verdict", "https://helldivers.wiki.gg/images/6/60/P-113_Verdict_Secondary_Weaponry.png"],
		["P-4 Senator", "https://helldivers.wiki.gg/images/7/75/P-4_Senator_Secondary_Weaponry.png"],
		["SG-22 Bushwhacker", "https://helldivers.wiki.gg/images/e/ec/SG-22_Bushwhacker_Secondary_Weaponry.png"],
		["LAS-7 Dagger", "https://helldivers.wiki.gg/images/d/d7/LAS-7_Dagger_Secondary_Weaponry.png"],
		["P-72 Crisper", "https://helldivers.wiki.gg/images/b/b2/P-72_Crisper_Secondary_Weaponry.png"],
		["P-11 Stim Pistol", "https://helldivers.wiki.gg/images/7/73/P-11_Stim_Pistol_Secondary_Weaponry.png"],
		["PLAS-15 Loyalist", "https://helldivers.wiki.gg/images/b/b0/PLAS-15_Loyalist_Secondary_Weaponry.png"],
		["CQC-19 Stun Lance", "https://helldivers.wiki.gg/images/1/13/CQC-19_Stun_Lance_Secondary_Weaponry.png"],
		["CQC-30 Stun Baton", "https://helldivers.wiki.gg/images/9/96/CQC-30_Stun_Baton_Secondary_Weaponry.png"],
		["GP-31 Ultimatum", "https://helldivers.wiki.gg/images/c/ce/GP-31_Ultimatum_Secondary_Weaponry.png"],
		["CQC-5 Combat Hatchet", "https://helldivers.wiki.gg/images/c/c8/CQC-5_Combat_Hatchet_Secondary_Weaponry.png"],
		["LAS-58 Talon", skull]
	],[
	// 2 = Throwables
		["G-12 High Explosive", "https://helldivers.wiki.gg/images/4/4c/G-12_High_Explosive_Throwable_Weaponry.png"],
		["G-6 Frag", "https://helldivers.wiki.gg/images/0/0f/G-6_Frag_Throwable_Weaponry.png"],
		["G-16 Impact", "https://helldivers.wiki.gg/images/6/6a/G-16_Impact_Throwable_Weaponry.png"],
		["G-3 Smoke", "https://helldivers.wiki.gg/images/5/5c/G-3_Smoke_Throwable_Weaponry.png"],
		["G-10 Incendiary", "https://helldivers.wiki.gg/images/8/8b/G-10_Incendiary_Throwable_Weaponry.png"],
		["G-23 Stun", "https://helldivers.wiki.gg/images/a/a8/G-23_Stun_Throwable_Weaponry.png"],
		["G-123 Thermite", "https://helldivers.wiki.gg/images/2/2b/G-123_Thermite_Throwable_Weaponry.png"],
		["G-13 Incendiary Impact", "https://helldivers.wiki.gg/images/3/37/G-13_Incendiary_Impact_Throwable_Weaponry.png"],
		["K-2 Throwing Knife", "https://helldivers.wiki.gg/images/4/49/K-2_Throwing_Knife_Throwable_Weaponry.png"],
		["G-4 Gas", "https://helldivers.wiki.gg/images/8/88/G-4_Gas_Throwable_Weaponry.png"],
		["G-50 Seeker", "https://helldivers.wiki.gg/images/0/07/G-50_Seeker_Throwable_Weaponry.png"],
		["TED-63 Dynamite", skull]
	],[
	// 3 = Strategems
		["MG-43 Machine Gun", "https://helldivers.wiki.gg/images/e/e0/Machine_Gun_Stratagem_Icon.png"],
		["APW-1 Anti-Materiel Rifle", "https://helldivers.wiki.gg/images/3/3c/Anti-Materiel_Rifle_Stratagem_Icon.png"],
		["M-105 Stalwart", "https://helldivers.wiki.gg/images/4/46/Stalwart_Stratagem_Icon.png"],
		["EAT-17 Expendable Anti-Tank", "https://helldivers.wiki.gg/images/1/1c/Expendable_Anti-Tank_Stratagem_Icon.png"],
		["GR-8 Recoilless Rifle", "https://helldivers.wiki.gg/images/7/70/Recoilless_Rifle_Stratagem_Icon.png"],
		["FLAM-40 Flamethrower", "https://helldivers.wiki.gg/images/7/75/Flamethrower_Stratagem_Icon.png"],
		["AC-8 Autocannon", "https://helldivers.wiki.gg/images/e/ef/Autocannon_Stratagem_Icon.png"],
		["MG-206 Heavy Machine Gun", "https://helldivers.wiki.gg/images/d/d9/Heavy_Machine_Gun_Stratagem_Icon.png"],
		["RL-77 Airburst Rocket Launcher", "https://helldivers.wiki.gg/images/a/ad/RL-77_Airburst_Rocket_Launcher_Stratagem_Icon.png"],
		["MLS-4X Commando", "https://helldivers.wiki.gg/images/7/78/Commando_Stratagem_Icon.png"],
		["RS-422 Railgun", "https://helldivers.wiki.gg/images/3/35/Railgun_Stratagem_Icon.png"],
		["FAF-14 Spear", "https://helldivers.wiki.gg/images/5/54/Spear_Stratagem_Icon.png"],
		["Orbital Gatling Barrage", "https://helldivers.wiki.gg/images/f/f6/Orbital_Gatling_Barrage_Stratagem_Icon.png"],
		["Orbital Airburst Strike", "https://helldivers.wiki.gg/images/2/28/Orbital_Airburst_Strike_Stratagem_Icon.png"],
		["Orbital 120mm HE Barrage", "https://helldivers.wiki.gg/images/4/40/Orbital_120mm_HE_Barrage_Stratagem_Icon.png"],
		["Orbital 380mm HE Barrage", "https://helldivers.wiki.gg/images/1/12/Orbital_380mm_HE_Barrage_Stratagem_Icon.png"],
		["Orbital Walking Barrage", "https://helldivers.wiki.gg/images/5/53/Orbital_Walking_Barrage_Stratagem_Icon.png"],
		["Orbital Laser", "https://helldivers.wiki.gg/images/d/d8/Orbital_Laser_Stratagem_Icon.png"],
		["Orbital Railcannon Strike", "https://helldivers.wiki.gg/images/6/6f/Orbital_Railcannon_Strike_Stratagem_Icon.png"],
		["Eagle Strafing Run", "https://helldivers.wiki.gg/images/f/f3/Eagle_Strafing_Run_Stratagem_Icon.png"],
		["Eagle Airstrike", "https://helldivers.wiki.gg/images/7/72/Eagle_Airstrike_Stratagem_Icon.png"],
		["Eagle Cluster Bomb", "https://helldivers.wiki.gg/images/4/4f/Eagle_Cluster_Bomb_Stratagem_Icon.png"],
		["Eagle Napalm Airstrike", "https://helldivers.wiki.gg/images/4/42/Eagle_Napalm_Airstrike_Stratagem_Icon.png"],
		["LIFT-850 Jump Pack", "https://helldivers.wiki.gg/images/f/f5/Jump_Pack_Stratagem_Icon.png"],
		["Eagle Smoke Strike", "https://helldivers.wiki.gg/images/0/05/Eagle_Smoke_Strike_Stratagem_Icon.png"],
		["Eagle 110mm Rocket Pods", "https://helldivers.wiki.gg/images/e/ef/Eagle_110mm_Rocket_Pods_Stratagem_Icon.png"],
		["Eagle 500kg Bomb", "https://helldivers.wiki.gg/images/e/e5/Eagle_500kg_Bomb_Stratagem_Icon.png"],
		["Orbital Precision Strike", "https://helldivers.wiki.gg/images/2/2a/Orbital_Precision_Strike_Stratagem_Icon.png"],
		["Orbital Gas Strike", "https://helldivers.wiki.gg/images/c/cd/Orbital_Gas_Strike_Stratagem_Icon.png"],
		["Orbital EMS Strike", "https://helldivers.wiki.gg/images/1/16/Orbital_EMS_Strike_Stratagem_Icon.png"],
		["Orbital Smoke Strike", "https://helldivers.wiki.gg/images/b/bc/Orbital_Smoke_Strike_Stratagem_Icon.png"],
		["E/MG-101 HMG Emplacement", "https://helldivers.wiki.gg/images/0/03/HMG_Emplacement_Stratagem_Icon.png"],
		["FX-12 Shield Generator Relay", "https://helldivers.wiki.gg/images/e/e4/Shield_Generator_Relay_Stratagem_Icon.png"],
		["A/ARC-3 Tesla Tower", "https://helldivers.wiki.gg/images/8/8f/Tesla_Tower_Stratagem_Icon.png"],
		["MD-6 Anti-Personnel Minefield", "https://helldivers.wiki.gg/images/b/bb/Anti-Personnel_Minefield_Stratagem_Icon.png"],
		["B-1 Supply Pack", "https://helldivers.wiki.gg/images/6/61/Supply_Pack_Stratagem_Icon.png"],
		["GL-21 Grenade Launcher", "https://helldivers.wiki.gg/images/c/cf/Grenade_Launcher_Stratagem_Icon.png"],
		["LAS-98 Laser Cannon", "https://helldivers.wiki.gg/images/c/c3/Laser_Cannon_Stratagem_Icon.png"],
		["MD-I4 Incendiary Mines", "https://helldivers.wiki.gg/images/4/40/Incendiary_Mines_Stratagem_Icon.png?b0bff9=&format=original"],
		["AX/LAS-5 \"Guard Dog\" Rover", "https://helldivers.wiki.gg/images/6/6f/Guard_Dog_Rover_Stratagem_Icon.png"],
		["SH-20 Ballistic Shield Backpack", "https://helldivers.wiki.gg/images/3/37/Ballistic_Shield_Backpack_Stratagem_Icon.png"],
		["ARC-3 Arc Thrower", "https://helldivers.wiki.gg/images/1/10/Arc_Thrower_Stratagem_Icon.png"],
		["MD-17 Anti-Tank Mines", "https://helldivers.wiki.gg/images/b/ba/MD-17_Anti-Tank_Mines_Stratagem_Icon.png"],
		["LAS-99 Quasar Cannon", "https://helldivers.wiki.gg/images/8/87/Quasar_Cannon_Stratagem_Icon.png"],
		["SH-32 Shield Generator Pack", "https://helldivers.wiki.gg/images/9/99/Shield_Generator_Pack_Stratagem_Icon.png"],
		["A/MG-43 Machine Gun Sentry", "https://helldivers.wiki.gg/images/5/5a/Machine_Gun_Sentry_Stratagem_Icon.png"],
		["A/G-16 Gatling Sentry", "https://helldivers.wiki.gg/images/2/28/Gatling_Sentry_Stratagem_Icon.png"],
		["A/M-12 Mortar Sentry", "https://helldivers.wiki.gg/images/a/ad/Mortar_Sentry_Stratagem_Icon.png"],
		["AX/AR-23 \"Guard Dog\"", "https://helldivers.wiki.gg/images/7/73/Guard_Dog_Stratagem_Icon.png"],
		["A/AC-8 Autocannon Sentry", "https://helldivers.wiki.gg/images/a/a7/Autocannon_Sentry_Stratagem_Icon.png"],
		["A/MLS-4X Rocket Sentry", "https://helldivers.wiki.gg/images/6/62/Rocket_Sentry_Stratagem_Icon.png"],
		["A/M-23 EMS Mortar Sentry", "https://helldivers.wiki.gg/images/a/a8/AM-23_EMS_Mortar_Sentry_Stratagem_Icon.png"],
		["EXO-45 Patriot Exosuit", "https://helldivers.wiki.gg/images/3/30/EXO-45_Patriot_Exosuit_Stratagem_Icon.png"],
		["EXO-49 Emancipator Exosuit", "https://helldivers.wiki.gg/images/8/82/EXO-49_Emancipator_Exosuit_Stratagem_Icon.png"],
		["TX-41 Sterilizer", "https://helldivers.wiki.gg/images/2/29/Sterilizer_Stratagem_Icon.png"],
		["AX/TX-13 \"Guard Dog\" Dog Breath", "https://helldivers.wiki.gg/images/2/20/Guard_Dog_Dog_Breath_Stratagem_Icon.png"],
		["Orbital Napalm Barrage", "https://helldivers.wiki.gg/images/9/97/Orbital_Napalm_Barrage_Stratagem_Icon.png"],
		["SH-51 Directional Shield", "https://helldivers.wiki.gg/images/b/b7/SH-51_Directional_Shield_Stratagem_Icon.png"],
		["MD-8 Gas Mines", "https://helldivers.wiki.gg/images/1/13/Gas_Minefield_Stratagem_Icon.png"],
		["E/AT-12 Anti-Tank Emplacement", "https://helldivers.wiki.gg/images/6/62/E_AT-12_Anti-Tank_Emplacement_Stratagem_Icon.png"],
		["A/FLAM-40 Flame Sentry", "https://helldivers.wiki.gg/images/0/0e/A_FLAM-40_Flame_Sentry_Stratagem_Icon.png"],
		["StA-X3 W.A.S.P. Launcher", "https://helldivers.wiki.gg/images/a/af/StA-X3_W.A.S.P._Launcher_Stratagem_Icon.png"],
		["M-102 Fast Reconnaissance Vehicle", "https://helldivers.wiki.gg/images/0/00/M-102_Fast_Recon_Vehicle_Stratagem_Icon.png"],
		["B-100 Portable Hellbomb", "https://helldivers.wiki.gg/images/a/aa/Portable_Hellbomb_Stratagem_Icon.png"],
		["B-100 LIFT-860 Hover Pack", skull]
	],[
	// 4 = Boosters
		["Hellpod Space Optimization", "https://helldivers.wiki.gg/images/2/2a/Hellpod_Space_Optimization_Booster_Icon.svg"],
		["Vitality Enhancement", "https://helldivers.wiki.gg/images/f/f6/Vitality_Enhancement_Booster_Icon.svg"],
		["UAV Recon Booster", "https://helldivers.wiki.gg/images/e/e7/UAV_Recon_Booster_Booster_Icon.svg"],
		["Stamina Enhancement", "https://helldivers.wiki.gg/images/6/68/Stamina_Enhancement_Booster_Icon.svg"],
		["Muscle Enhancement", "https://helldivers.wiki.gg/images/8/8b/Muscle_Enhancement_Booster_Icon.svg"],
		["Increased Reinforcement Budget", "https://helldivers.wiki.gg/images/6/6d/Increased_Reinforcement_Budget_Booster_Icon.svg"],
		["Flexible Reinforcement Budget", "https://helldivers.wiki.gg/images/4/49/Flexible_Reinforcement_Budget_Booster_Icon.svg"],
		["Localization Confusion", "https://helldivers.wiki.gg/images/9/9f/Localization_Confusion_Booster_Icon.svg"],
		["Expert Extraction Pilot", "https://helldivers.wiki.gg/images/a/af/Expert_Extraction_Pilot_Booster_Icon.svg"],
		["Motivational Shocks", "https://helldivers.wiki.gg/images/6/64/Motivational_Shocks_Booster_Icon.svg"],
		["Experimental Infusion", "https://helldivers.wiki.gg/images/2/20/Experimental_Infusion_Booster_Icon.svg"],
		["Firebomb Hellpods", "https://helldivers.wiki.gg/images/9/9c/Firebomb_Hellpods_Booster_Icon.svg"],
		["Dead Sprint", "https://helldivers.wiki.gg/images/4/4a/Dead_Sprint_Booster_Icon.svg"],
		["Armed Resupply Pods", "https://helldivers.wiki.gg/images/3/3a/Armed_Resupply_Pods_Booster_Icon.svg"],
		["Sample Extricator", skull]
	],[
	// 5 = Armours
		["B-08 Light Gunner", "https://helldivers.wiki.gg/images/e/e6/B-08_Light_Gunner_Body_Armory.png"],
		["CE-07 Demolition Specialist", "https://helldivers.wiki.gg/images/f/f3/CE-07_Demolition_Specialist_Body_Armory.png"],
		["CE-67 Titan", "https://helldivers.wiki.gg/images/b/bc/CE-67_Titan_Body_Armory.png"],
		["CE-74 Breaker", "https://helldivers.wiki.gg/images/9/9b/CE-74_Breaker_Body_Armory.png"],
		["CM-21 Trench Paramedic", "https://helldivers.wiki.gg/images/f/fb/CM-21_Trench_Paramedic_Body_Armory.png"],
		["CW-4 Arctic Ranger", "https://helldivers.wiki.gg/images/9/96/CW-4_Arctic_Ranger_Body_Armory.png"],
		["EX-00 Prototype X", "https://helldivers.wiki.gg/images/d/d3/EX-00_Prototype_X_Body_Armory.png"],
		["FS-37 Ravager", "https://helldivers.wiki.gg/images/f/f4/FS-37_Ravager_Body_Armory.png"],
		["FS-38 Eradicator", "https://helldivers.wiki.gg/images/2/20/FS-38_Eradicator_Body_Armory.png"],
		["I-09 Heatseeker", "https://helldivers.wiki.gg/images/d/d4/I-09_Heatseeker_Body_Armory.png"],
		["PH-9 Predator", "https://helldivers.wiki.gg/images/3/3d/PH-9_Predator_Body_Armory.png"],
		["SC-30 Trailblazer Scout", "https://helldivers.wiki.gg/images/5/50/SC-30_Trailblazer_Scout_Body_Armory.png"],
		["SC-34 Infiltrator", "https://helldivers.wiki.gg/images/7/76/SC-34_Infiltrator_Body_Armory.png"],
		["SC-37 Legionnaire", "https://helldivers.wiki.gg/images/8/8c/SC-37_Legionnaire_Body_Armory.png"],
		["B-01 Tactical (1)", "https://helldivers.wiki.gg/images/7/75/B-01_Tactical_Body_Armory.png"],
		["B-01 Tactical (2)", "https://helldivers.wiki.gg/images/8/84/B-01_Tactical_Body_Armory_2.png"],
		["B-01 Tactical (3)", "https://helldivers.wiki.gg/images/3/31/B-01_Tactical_Body_Armory_3.png"],
		["B-01 Tactical (4)", "https://helldivers.wiki.gg/images/f/f4/B-01_Tactical_Body_Armory_4.png"],
		["B-24 Enforcer", "https://helldivers.wiki.gg/images/8/82/B-24_Enforcer_Body_Armory.png"],
		["CE-27 Ground Breaker", "https://helldivers.wiki.gg/images/5/51/CE-27_Ground_Breaker_Body_Armory.png"],
		["CE-35 Trench Engineer", "https://helldivers.wiki.gg/images/5/5d/CE-35_Trench_Engineer_Body_Armory.png"],
		["CE-81 Juggernaut", "https://helldivers.wiki.gg/images/7/77/CE-81_Juggernaut_Body_Armory.png"],
		["CM-09 Bonesnapper", "https://helldivers.wiki.gg/images/e/ef/CM-09_Bonesnapper_Body_Armory.png"],
		["CM-10 Clinician", "https://helldivers.wiki.gg/images/a/aa/CM-10_Clinician_Body_Armory.png"],
		["CM-14 Physician", "https://helldivers.wiki.gg/images/c/c5/CM-14_Physician_Body_Armory.png"],
		["CW-9 White Wolf", "https://helldivers.wiki.gg/images/3/31/CW-9_White_Wolf_Body_Armory.png"],
		["DP-11 Champion of the People", "https://helldivers.wiki.gg/images/d/d8/DP-11_Champion_of_the_People_Body_Armory.png"],
		["DP-40 Hero of the Federation", "https://helldivers.wiki.gg/images/1/1e/DP-40_Hero_of_the_Federation_Body_Armory.png"],
		["DP-53 Savior of the Free", "https://helldivers.wiki.gg/images/5/57/DP-53_Savior_of_the_Free_Body_Armory.png"],
		["EX-03 Prototype 3", "https://helldivers.wiki.gg/images/8/8f/EX-03_Prototype_3_Body_Armory.png"],
		["EX-16 Prototype 16", "https://helldivers.wiki.gg/images/d/d7/EX-16_Prototype_16_Body_Armory.png"],
		["FS-34 Exterminator", "https://helldivers.wiki.gg/images/b/b0/FS-34_Exterminator_Body_Armory.png"],
		["I-92 Fire Fighter", "https://helldivers.wiki.gg/images/9/97/I-92_Fire_Fighter_Body_Armory.png"],
		["I-102 Draconaught", "https://helldivers.wiki.gg/images/a/ab/I-102_Draconaught_Body_Armory.png"],
		["PH-56 Jaguar", "https://helldivers.wiki.gg/images/f/f7/PH-56_Jaguar_Body_Armory.png"],
		["SA-04 Combat Technician", "https://helldivers.wiki.gg/images/c/c5/SA-04_Combat_Technician_Body_Armory.png"],
		["SA-12 Servo Assisted", "https://helldivers.wiki.gg/images/3/3a/SA-12_Servo_Assisted_Body_Armory.png"],
		["SA-25 Steel Trooper", "https://helldivers.wiki.gg/images/c/c8/SA-25_Steel_Trooper_Body_Armory.png"],
		["SC-15 Drone Master", "https://helldivers.wiki.gg/images/6/63/SC-15_Drone_Master_Body_Armory.png"],
		["TR-40 Gold Eagle", "https://helldivers.wiki.gg/images/5/52/TR-40_Gold_Eagle_Body_Armory.png"],
		["B-27 Fortified Commando", "https://helldivers.wiki.gg/images/e/eb/B-27_Fortified_Commando_Body_Armory.png"],
		["CE-64 Grenadier", "https://helldivers.wiki.gg/images/9/92/CE-64_Grenadier_Body_Armory.png"],
		["CE-101 Guerilla Gorilla", "https://helldivers.wiki.gg/images/7/75/CE-101_Guerilla_Gorilla_Body_Armory.png"],
		["CM-17 Butcher", "https://helldivers.wiki.gg/images/f/fb/CM-17_Butcher_Body_Armory.png"],
		["CW-22 Kodiak", "https://helldivers.wiki.gg/images/2/2e/CW-22_Kodiak_Body_Armory.png"],
		["CW-36 Winter Warrior", "https://helldivers.wiki.gg/images/2/2c/CW-36_Winter_Warrior_Body_Armory.png"],
		["FS-05 Marksman", "https://helldivers.wiki.gg/images/4/46/FS-05_Marksman_Body_Armory.png"],
		["FS-11 Executioner", "https://helldivers.wiki.gg/images/a/ac/FS-11_Executioner_Body_Armory.png"],
		["FS-23 Battle Master", "https://helldivers.wiki.gg/images/0/0e/FS-23_Battle_Master_Body_Armory.png"],
		["FS-55 Devastator", "https://helldivers.wiki.gg/images/b/be/FS-55_Devastator_Body_Armory.png"],
		["FS-61 Dreadnought", "https://helldivers.wiki.gg/images/4/4b/FS-61_Dreadnought_Body_Armory.png"],
		["I-44 Salamander", "https://helldivers.wiki.gg/images/4/45/I-44_Salamander_Body_Armory.png"],
		["PH-202 Twigsnapper", "https://helldivers.wiki.gg/images/7/75/PH-202_Twigsnapper_Body_Armory.png"],
		["SA-32 Dynamo", "https://helldivers.wiki.gg/images/1/15/SA-32_Dynamo_Body_Armory.png"],
		["AF-50 Noxious Ranger", "https://helldivers.wiki.gg/images/8/84/AF-50_Noxious_Ranger_Body_Armory.png"],
		["UF-16 Inspector", "https://helldivers.wiki.gg/images/3/3c/UF-16_Inspector_Body_Armory.png"],
		["AF-02 Haz-Master", "https://helldivers.wiki.gg/images/f/f7/AF-02_Haz-Master_Body_Armory.png"],
		["AF-91 Field Chemist", "https://helldivers.wiki.gg/images/3/3d/AF-91_Field_Chemist_Body_Armory.png"],
		["UF-50 Bloodhound", "https://helldivers.wiki.gg/images/a/ad/UF-50_Bloodhound_Body_Armory.png"],
		["UF-84 Doubt Killer", "https://helldivers.wiki.gg/images/c/c6/UF-84_Doubt_Killer_Body_Armory.png"],
		["AF-52 Lockdown", "https://helldivers.wiki.gg/images/a/a7/AF-52_Lockdown_Body_Armory.png"],
		["SR-24 Street Scout", "https://helldivers.wiki.gg/images/9/9b/SR-24_Street_Scout_Body_Armory.png"],
		["DP-00 Tactical", "https://helldivers.wiki.gg/images/b/bd/DP-00_Tactical_Body_Armory.png"],
		["TR-117 Alpha Commander", "https://helldivers.wiki.gg/images/b/b9/TR-117_Alpha_Commander_Body_Armory.png"],
		["SR-18 Roadblock", "https://helldivers.wiki.gg/images/9/94/SR-18_Roadblock_Body_Armory.png"],
		["SR-64 Cinderblock", "https://helldivers.wiki.gg/images/c/cc/SR-64_Cinderblock_Body_Armory.png"],
		["AC-2 Obedient", "https://helldivers.wiki.gg/images/d/da/AC-2_Obedient_Body_Armory.png"],
		["AC-1 Dutiful", "https://helldivers.wiki.gg/images/c/c8/AC-1_Dutiful_Body_Armory.png"],
		["IE-57 Hell-Bent", "https://helldivers.wiki.gg/images/e/ea/IE-57_Hell-Bent_Body_Armory.png"],
		["IE-3 Martyr", "https://helldivers.wiki.gg/images/f/f0/IE-3_Martyr_Body_Armory.png"],
		["IE-12 Righteous", "https://helldivers.wiki.gg/images/b/bd/IE-12_Righteous_Body_Armory.png"],
		["B-22 Model Citizen", "https://helldivers.wiki.gg/images/d/db/B-22_Model_Citizen_Body_Armory.png"],
		["GS-17 Frontier Marshall", skull],
		["GS-66 Lawmaker", skull],
		["GS-11 Democracy's Deputy", skull]
	]
];

// Combine all arrays into one
//const combinedArray = [...array1, ...array2, ...array3, ...array4, ...array5, ...array6];

// Function to shuffle the combined array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
    }
}

function createTable(data, tableName) {
	// Create the table element
	const table = document.createElement('table');

	// Loop through the array and create table rows
	data.forEach((row, rowIndex) => {
		const tr = document.createElement('tr');
    
		row.forEach((cell, cellIndex) => {
			const td = document.createElement('td'); // Use <th> for header row
			if (cellIndex === 1) { // Check if it's the 'Image' column
				const img = document.createElement('img');
				img.height = 150;
				img.src = cell; // Set the image source
				td.appendChild(img); // Append the image to the cell
			} else {
				td.textContent = cell; // Otherwise just add text
			}
			tr.appendChild(td);
		});

		table.appendChild(tr);
	});
	// Add the table to the container
	const container = document.getElementById(tableName);
	container.appendChild(table);
}

function getThreeUnique(max) {
  const numbers = new Set();

  while (numbers.size < 3) {
    const randomNumber = Math.floor(Math.random() * max);
    numbers.add(randomNumber);  // Add the random number to the set (duplicates are automatically ignored)
  }

  const temp = Array.from(numbers);
  return temp;  // Convert the set back to an array
}

function changeMessage() {
	const messageElement = document.getElementById("message");
	
	const categorySelections = [];
	for (let i = 0; i < 3; i++) {
		const x = Math.floor(Math.random() * 5);
		categorySelections.push(x);
	}
	
	const threeUnique = [];
	threeUnique.push(getThreeUnique(MasterList[0].length));
	threeUnique.push(getThreeUnique(MasterList[1].length));
	threeUnique.push(getThreeUnique(MasterList[2].length));
	threeUnique.push(getThreeUnique(MasterList[3].length));
	threeUnique.push(getThreeUnique(MasterList[4].length));
	threeUnique.push(getThreeUnique(MasterList[5].length));

	const finalResults = [
		[MasterList[categorySelections[0]][threeUnique[categorySelections[0]][0]][0], MasterList[categorySelections[0]][threeUnique[categorySelections[0]][0]][1]],
		[MasterList[categorySelections[1]][threeUnique[categorySelections[1]][1]][0], MasterList[categorySelections[1]][threeUnique[categorySelections[1]][1]][1]],
		[MasterList[categorySelections[2]][threeUnique[categorySelections[2]][2]][0], MasterList[categorySelections[2]][threeUnique[categorySelections[2]][2]][1]]
	];
	
	const table = document.createElement('table');
	table.style.height = '270px';
	
  const headerRow = document.createElement('tr');
  
  // Array of header names
  const headers = ['Option 1', 'Option 2', 'Option 3'];

  // Loop through the headers and create <th> elements
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;  // Set the text of the header
    th.style.border = '1px solid black';  // Add border to the header
    headerRow.appendChild(th);  // Append the header cell to the header row
  });

  // Append the header row to the table
  table.appendChild(headerRow);
  
    for(var i = 1; i < 3; i++) {
        var row = table.insertRow(i);
		if (i == 1) {
			row.insertCell(0).innerHTML = finalResults[0][0];
			row.style.fontWeight = 'bold';
			row.insertCell(1).innerHTML = finalResults[1][0];
			row.insertCell(2).innerHTML = finalResults[2][0];
		} else {
			const img1 = document.createElement('img');
			img1.height = 150;
			img1.src = finalResults[0][1];
			const img2 = document.createElement('img');
			img2.height = 150;
			img2.src = finalResults[1][1];
			const img3 = document.createElement('img');
			img3.height = 150;
			img3.src = finalResults[2][1];
			row.insertCell(0).innerHTML = '';
			row.insertCell(1).innerHTML = '';
			row.insertCell(2).innerHTML = '';
			var cell = row.cells[0];
			cell.appendChild(img1);
			cell = row.cells[1];
			cell.appendChild(img2);
			cell = row.cells[2];
			cell.appendChild(img3);
		}
			
    }
	
	const container = document.getElementById('table-results');
	container.innerHTML = '';
	container.appendChild(table);
  
	// const firstUrl = MasterList[categorySelections[0]][threeUnique[categorySelections[0]][0]][1];
	// const first = document.getElementById("image1");
	// first.src = firstUrl;

	// const secondUrl = MasterList[categorySelections[1]][threeUnique[categorySelections[1]][1]][1];
	// const second = document.getElementById("image2");
	// second.src = secondUrl;

	// const thirdUrl = MasterList[categorySelections[2]][threeUnique[categorySelections[2]][2]][1];
	// const third = document.getElementById("image3");
	// third.src = thirdUrl;
}

function openTab(tabName) {
	// Hide all tab content
	const contents = document.querySelectorAll('.tab-content');
	contents.forEach(content => content.style.display = 'none');

	// Show the clicked tab content
	const activeTab = document.getElementById(tabName);
	activeTab.style.display = 'block';
}

createTable(MasterList[0], 'table-primary');
createTable(MasterList[1], 'table-side');
createTable(MasterList[2], 'table-throw');
createTable(MasterList[3], 'table-strat');
createTable(MasterList[4], 'table-boost');
createTable(MasterList[5], 'table-armour');