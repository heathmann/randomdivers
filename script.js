const skull = "./images/misc/skull.jpg";

// [category] [name] [image]
const MasterList = [
	[
	// 0 = Primary Weapons
		["AR-23 Liberator", "./images/Primary/AR-23_Liberator_Primary_Weaponry.png", true],
		["AR-23P Liberator Penetrator", "./images/Primary/AR-23P_Liberator_Penetrator_Primary_Weaponry.png", true],
		["AR-23C Liberator Concussive", "./images/Primary/AR-23C_Liberator_Concussive_Primary_Weaponry.png", true],
		["StA-52 Assault Rifle", "./images/Primary/StA-52_Assault_Rifle_Primary_Weaponry.png", true],
		["AR-23A Liberator Carbine", "./images/Primary/AR-23A_Liberator_Carbine_Primary_Weaponry.png", true],
		["AR-61 Tenderizer", "./images/Primary/AR-61_Tenderizer_Primary_Weaponry.png", true],
		["BR-14 Adjudicator", "./images/Primary/BR-14_Adjudicator_Primary_Weaponry.png", true],
		["R-2124 Constitution", "./images/Primary/R-2124_Constitution_Primary_Weaponry.png", true],
		["R-6 Deadeye", "./images/Primary/R-6_Deadeye_Primary_Weaponry.png", true],
		["R-63 Diligence", "./images/Primary/R-63_Diligence_Primary_Weaponry.png", true],
		["R-63CS Diligence Counter Sniper", "./images/Primary/R-63CS_Diligence_Counter_Sniper_Primary_Weaponry.png", true],
		["PLAS-39 Accelerator Rifle", "./images/Primary/PLAS-39_Accelerator_Rifle_Primary_Weaponry.png", true],
		["MP-98 Knight", "./images/Primary/MP-98_Knight_Primary_Weaponry.png", true],
		["StA-11 SMG", "./images/Primary/StA-11_SMG_Primary_Weaponry.png", true],
		["SMG-32 Reprimand", "./images/Primary/SMG-32_Reprimand_Primary_Weaponry.png", true],
		["SMG-37 Defender", "./images/Primary/SMG-37_Defender_Primary_Weaponry.png", true],
		["SMG-72 Pummeler", "./images/Primary/SMG-72_Pummeler_Primary_Weaponry.png", true],
		["SG-8 Punisher", "./images/Primary/SG-8_Punisher_Primary_Weaponry.png", true],
		["SG-8S Slugger", "./images/Primary/SG-8S_Slugger_Primary_Weaponry.png", true],
		["SG-20 Halt", "./images/Primary/SG-20_Halt_Primary_Weaponry.png", true],
		["SG-451 Cookout", "./images/Primary/SG-451_Cookout_Primary_Weaponry.png", true],
		["SG-225 Breaker", "./images/Primary/SG-225_Breaker_Primary_Weaponry.png", true],
		["SG-225SP Breaker Spray & Pray", "./images/Primary/SG-225SP_Breaker_Spray&Pray_Primary_Weaponry.png", true],
		["SG-225IE Breaker Incendiary", "./images/Primary/SG-225IE_Breaker_Incendiary_Primary_Weaponry.png", true],
		["CB-9 Exploding Crossbow", "./images/Primary/CB-9_Exploding_Crossbow_Primary_Weaponry.png", true],
		["R-36 Eruptor", "./images/Primary/R-36_Eruptor_Primary_Weaponry.png", true],
		["SG-8P Punisher Plasma", "./images/Primary/SG-8P_Punisher_Plasma_Primary_Weaponry.png", true],
		["ARC-12 Blitzer", "./images/Primary/ARC-12_Blitzer_Primary_Weaponry.png", true],
		["LAS-5 Scythe", "./images/Primary/LAS-5_Scythe_Primary_Weaponry.png", true],
		["LAS-16 Sickle", "./images/Primary/LAS-16_Sickle_Primary_Weaponry.png", true],
		["LAS-17 Double-Edge Sickle", "./images/Primary/LAS-17_Double-Edge_Sickle_Primary_Weaponry.png", true],
		["PLAS-1 Scorcher", "./images/Primary/PLAS-1_Scorcher_Primary_Weaponry.png", true],
		["PLAS-101 Purifier", "./images/Primary/PLAS-101_Purifier_Primary_Weaponry.png", true],
		["FLAM-66 Torcher", "./images/Primary/FLAM-66_Torcher_Primary_Weaponry.png", true],
		["JAR-5 Dominator", "./images/Primary/JAR-5_Dominator_Primary_Weaponry.png", true]
	],[
	// 1 = Side Arms
		["P-2 Peacemaker", "./images/Side/P-2_Peacemaker_Secondary_Weaponry.png", true],
		["P-19 Redeemer", "./images/Side/P-19_Redeemer_Secondary_Weaponry.png", true],
		["P-113 Verdict", "./images/Side/P-113_Verdict_Secondary_Weaponry.png", true],
		["P-4 Senator", "./images/Side/P-4_Senator_Secondary_Weaponry.png", true],
		["CQC-19 Stun Lance", "./images/Side/CQC-19_Stun_Lance_Secondary_Weaponry.png", true],
		["CQC-30 Stun Baton", "./images/Side/CQC-30_Stun_Baton_Secondary_Weaponry.png", true],
		["CQC-5 Combat Hatchet", "./images/Side/CQC-5_Combat_Hatchet_Secondary_Weaponry.png", true],
		["P-11 Stim Pistol", "./images/Side/P-11_Stim_Pistol_Secondary_Weaponry.png", true],
		["SG-22 Bushwhacker", "./images/Side/SG-22_Bushwhacker_Secondary_Weaponry.png", true],
		["LAS-58 Talon", "./images/Side/LAS-58_Talon_Secondary_Weaponry.png", true],
		["P-72 Crisper", "./images/Side/P-72_Crisper_Secondary_Weaponry.png", true],
		["GP-31 Grenade Pistol", "./images/Side/GP-31_Grenade_Pistol_Secondary_Weaponry.png", true],
		["LAS-7 Dagger", "./images/Side/LAS-7_Dagger_Secondary_Weaponry.png", true],
		["GP-31 Ultimatum", "./images/Side/GP-31_Ultimatum_Secondary_Weaponry.png", true],
		["PLAS-15 Loyalist", "./images/Side/PLAS-15_Loyalist_Secondary_Weaponry.png", true]
	],[
	// 2 = Throwables
		["TED-63 Dynamite", "https://helldivers.wiki.gg/images/0/07/TED-83_Dynamite_Throwable_Icon.png?79b204=&format=original", true],
		["G-6 Frag", "https://helldivers.wiki.gg/images/0/0f/G-6_Frag_Throwable_Weaponry.png", true],
		["G-12 High Explosive", "https://helldivers.wiki.gg/images/4/4c/G-12_High_Explosive_Throwable_Weaponry.png", true],
		["G-10 Incendiary", "https://helldivers.wiki.gg/images/8/8b/G-10_Incendiary_Throwable_Weaponry.png", true],
		["G-16 Impact", "https://helldivers.wiki.gg/images/6/6a/G-16_Impact_Throwable_Weaponry.png", true],
		["G-13 Incendiary Impact", "https://helldivers.wiki.gg/images/3/37/G-13_Incendiary_Impact_Throwable_Weaponry.png", true],
		["G-23 Stun", "https://helldivers.wiki.gg/images/a/a8/G-23_Stun_Throwable_Weaponry.png", true],
		["G-4 Gas", "https://helldivers.wiki.gg/images/8/88/G-4_Gas_Throwable_Weaponry.png", true],
		["G-50 Seeker", "https://helldivers.wiki.gg/images/0/07/G-50_Seeker_Throwable_Weaponry.png", true],
		["G-3 Smoke", "https://helldivers.wiki.gg/images/5/5c/G-3_Smoke_Throwable_Weaponry.png", true],
		["G-123 Thermite", "https://helldivers.wiki.gg/images/2/2b/G-123_Thermite_Throwable_Weaponry.png", true],
		["K-2 Throwing Knife", "https://helldivers.wiki.gg/images/4/49/K-2_Throwing_Knife_Throwable_Weaponry.png", true]
	],[
	// 3 = Strategems
		["Orbital Precision Strike", "https://helldivers.wiki.gg/images/2/2a/Orbital_Precision_Strike_Stratagem_Icon.png", true],
		["Orbital Gatling Barrage", "https://helldivers.wiki.gg/images/f/f6/Orbital_Gatling_Barrage_Stratagem_Icon.png", true],
		["Orbital Airburst Strike", "https://helldivers.wiki.gg/images/2/28/Orbital_Airburst_Strike_Stratagem_Icon.png", true],
		["Orbital Napalm Barrage", "https://helldivers.wiki.gg/images/9/97/Orbital_Napalm_Barrage_Stratagem_Icon.png", true],
		["Orbital 120mm HE Barrage", "https://helldivers.wiki.gg/images/4/40/Orbital_120mm_HE_Barrage_Stratagem_Icon.png", true],
		["Orbital Walking Barrage", "https://helldivers.wiki.gg/images/5/53/Orbital_Walking_Barrage_Stratagem_Icon.png", true],
		["Orbital 380mm HE Barrage", "https://helldivers.wiki.gg/images/1/12/Orbital_380mm_HE_Barrage_Stratagem_Icon.png", true],
		["Orbital Railcannon Strike", "https://helldivers.wiki.gg/images/6/6f/Orbital_Railcannon_Strike_Stratagem_Icon.png", true],
		["Orbital Laser", "https://helldivers.wiki.gg/images/d/d8/Orbital_Laser_Stratagem_Icon.png", true],
		["Orbital EMS Strike", "https://helldivers.wiki.gg/images/1/16/Orbital_EMS_Strike_Stratagem_Icon.png", true],
		["Orbital Gas Strike", "https://helldivers.wiki.gg/images/c/cd/Orbital_Gas_Strike_Stratagem_Icon.png", true],
		["Orbital Smoke Strike", "https://helldivers.wiki.gg/images/b/bc/Orbital_Smoke_Strike_Stratagem_Icon.png", true],
		["Eagle 500kg Bomb", "https://helldivers.wiki.gg/images/e/e5/Eagle_500kg_Bomb_Stratagem_Icon.png", true],
		["Eagle Strafing Run", "https://helldivers.wiki.gg/images/f/f3/Eagle_Strafing_Run_Stratagem_Icon.png", true],
		["Eagle 110mm Rocket Pods", "https://helldivers.wiki.gg/images/e/ef/Eagle_110mm_Rocket_Pods_Stratagem_Icon.png", true],
		["Eagle Airstrike", "https://helldivers.wiki.gg/images/7/72/Eagle_Airstrike_Stratagem_Icon.png", true],
		["Eagle Cluster Bomb", "https://helldivers.wiki.gg/images/4/4f/Eagle_Cluster_Bomb_Stratagem_Icon.png", true],
		["Eagle Napalm Airstrike", "https://helldivers.wiki.gg/images/4/42/Eagle_Napalm_Airstrike_Stratagem_Icon.png", true],
		["Eagle Smoke Strike", "https://helldivers.wiki.gg/images/0/05/Eagle_Smoke_Strike_Stratagem_Icon.png", true],
		["MG-43 Machine Gun", "https://helldivers.wiki.gg/images/e/e0/Machine_Gun_Stratagem_Icon.png", true],
		["M-105 Stalwart", "https://helldivers.wiki.gg/images/4/46/Stalwart_Stratagem_Icon.png", true],
		["MG-206 Heavy Machine Gun", "https://helldivers.wiki.gg/images/d/d9/Heavy_Machine_Gun_Stratagem_Icon.png", true],
		["RS-422 Railgun", "https://helldivers.wiki.gg/images/3/35/Railgun_Stratagem_Icon.png", true],
		["APW-1 Anti-Materiel Rifle", "https://helldivers.wiki.gg/images/3/3c/Anti-Materiel_Rifle_Stratagem_Icon.png", true],
		["GL-21 Grenade Launcher", "https://helldivers.wiki.gg/images/c/cf/Grenade_Launcher_Stratagem_Icon.png", true],
		["TX-41 Sterilizer", "https://helldivers.wiki.gg/images/2/29/Sterilizer_Stratagem_Icon.png", true],
		["FLAM-40 Flamethrower", "https://helldivers.wiki.gg/images/7/75/Flamethrower_Stratagem_Icon.png", true],
		["LAS-98 Laser Cannon", "https://helldivers.wiki.gg/images/c/c3/Laser_Cannon_Stratagem_Icon.png", true],
		["LAS-99 Quasar Cannon", "https://helldivers.wiki.gg/images/8/87/Quasar_Cannon_Stratagem_Icon.png", true],
		["ARC-3 Arc Thrower", "https://helldivers.wiki.gg/images/1/10/Arc_Thrower_Stratagem_Icon.png", true],
		["MLS-4X Commando", "https://helldivers.wiki.gg/images/7/78/Commando_Stratagem_Icon.png", true],
		["EAT-17 Expendable Anti-Tank", "https://helldivers.wiki.gg/images/1/1c/Expendable_Anti-Tank_Stratagem_Icon.png", true],
		["AC-8 Autocannon", "https://helldivers.wiki.gg/images/e/ef/Autocannon_Stratagem_Icon.png", true],
		["RL-77 Airburst Rocket Launcher", "https://helldivers.wiki.gg/images/a/ad/RL-77_Airburst_Rocket_Launcher_Stratagem_Icon.png", true],
		["FAF-14 Spear", "https://helldivers.wiki.gg/images/5/54/Spear_Stratagem_Icon.png", true],
		["StA-X3 W.A.S.P. Launcher", "https://helldivers.wiki.gg/images/a/af/StA-X3_W.A.S.P._Launcher_Stratagem_Icon.png", true],
		["GR-8 Recoilless Rifle", "https://helldivers.wiki.gg/images/7/70/Recoilless_Rifle_Stratagem_Icon.png", true],
		["SH-32 Shield Generator Pack", "https://helldivers.wiki.gg/images/9/99/Shield_Generator_Pack_Stratagem_Icon.png", true],
		["SH-51 Directional Shield", "https://helldivers.wiki.gg/images/b/b7/SH-51_Directional_Shield_Stratagem_Icon.png", true],
		["SH-20 Ballistic Shield Backpack", "https://helldivers.wiki.gg/images/3/37/Ballistic_Shield_Backpack_Stratagem_Icon.png", true],
		["LIFT-860 Hover Pack", "https://helldivers.wiki.gg/images/5/5d/Hover_Pack_Stratagem_Icon.png?a00cb1&format=original", true],
		["B-1 Supply Pack", "https://helldivers.wiki.gg/images/6/61/Supply_Pack_Stratagem_Icon.png", true],
		["B-100 Portable Hellbomb", "https://helldivers.wiki.gg/images/a/aa/Portable_Hellbomb_Stratagem_Icon.png", true],
		["LIFT-850 Jump Pack", "https://helldivers.wiki.gg/images/f/f5/Jump_Pack_Stratagem_Icon.png", true],
		["AX/AR-23 \"Guard Dog\"", "https://helldivers.wiki.gg/images/7/73/Guard_Dog_Stratagem_Icon.png", true],
		["AX/LAS-5 \"Guard Dog\" Rover", "https://helldivers.wiki.gg/images/6/6f/Guard_Dog_Rover_Stratagem_Icon.png", true],
		["AX/TX-13 \"Guard Dog\" Dog Breath", "https://helldivers.wiki.gg/images/2/20/Guard_Dog_Dog_Breath_Stratagem_Icon.png", true],
		["M-102 Fast Reconnaissance Vehicle", "https://helldivers.wiki.gg/images/0/00/M-102_Fast_Recon_Vehicle_Stratagem_Icon.png", true],
		["EXO-49 Emancipator Exosuit", "https://helldivers.wiki.gg/images/8/82/EXO-49_Emancipator_Exosuit_Stratagem_Icon.png", true],
		["EXO-45 Patriot Exosuit", "https://helldivers.wiki.gg/images/3/30/EXO-45_Patriot_Exosuit_Stratagem_Icon.png", true],
		["A/G-16 Gatling Sentry", "https://helldivers.wiki.gg/images/2/28/Gatling_Sentry_Stratagem_Icon.png", true],
		["A/MG-43 Machine Gun Sentry", "https://helldivers.wiki.gg/images/5/5a/Machine_Gun_Sentry_Stratagem_Icon.png", true],
		["A/FLAM-40 Flame Sentry", "https://helldivers.wiki.gg/images/0/0e/A_FLAM-40_Flame_Sentry_Stratagem_Icon.png", true],
		["A/MLS-4X Rocket Sentry", "https://helldivers.wiki.gg/images/6/62/Rocket_Sentry_Stratagem_Icon.png", true],
		["A/AC-8 Autocannon Sentry", "https://helldivers.wiki.gg/images/a/a7/Autocannon_Sentry_Stratagem_Icon.png", true],
		["A/M-23 EMS Mortar Sentry", "https://helldivers.wiki.gg/images/a/a8/AM-23_EMS_Mortar_Sentry_Stratagem_Icon.png", true],
		["A/M-12 Mortar Sentry", "https://helldivers.wiki.gg/images/a/ad/Mortar_Sentry_Stratagem_Icon.png", true],
		["FX-12 Shield Generator Relay", "https://helldivers.wiki.gg/images/e/e4/Shield_Generator_Relay_Stratagem_Icon.png", true],
		["E/GL-21 Grenadier Battlement", "https://helldivers.wiki.gg/images/3/3f/GL-21_Grenadier_Battlement_Stratagem_Icon.png?747ef0&format=original", true],
		["E/AT-12 Anti-Tank Emplacement", "https://helldivers.wiki.gg/images/6/62/E_AT-12_Anti-Tank_Emplacement_Stratagem_Icon.png", true],
		["E/MG-101 HMG Emplacement", "https://helldivers.wiki.gg/images/0/03/HMG_Emplacement_Stratagem_Icon.png", true],
		["A/ARC-3 Tesla Tower", "https://helldivers.wiki.gg/images/8/8f/Tesla_Tower_Stratagem_Icon.png", true],
		["MD-17 Anti-Tank Mines", "https://helldivers.wiki.gg/images/b/ba/MD-17_Anti-Tank_Mines_Stratagem_Icon.png", true],
		["MD-8 Gas Mines", "https://helldivers.wiki.gg/images/1/13/Gas_Minefield_Stratagem_Icon.png", true],
		["MD-6 Anti-Personnel Minefield", "https://helldivers.wiki.gg/images/b/bb/Anti-Personnel_Minefield_Stratagem_Icon.png", true],
		["MD-I4 Incendiary Mines", "https://helldivers.wiki.gg/images/4/40/Incendiary_Mines_Stratagem_Icon.png?b0bff9=&format=original", true],
		["Empty slot", skull, false]
	],[
	// 4 = Boosters
		["Vitality Enhancement", "https://helldivers.wiki.gg/images/f/f6/Vitality_Enhancement_Booster_Icon.svg", true],
		["Stamina Enhancement", "https://helldivers.wiki.gg/images/6/68/Stamina_Enhancement_Booster_Icon.svg", true],
		["Muscle Enhancement", "https://helldivers.wiki.gg/images/8/8b/Muscle_Enhancement_Booster_Icon.svg", true],
		["UAV Recon Booster", "https://helldivers.wiki.gg/images/e/e7/UAV_Recon_Booster_Booster_Icon.svg", true],
		["Increased Reinforcement Budget", "https://helldivers.wiki.gg/images/6/6d/Increased_Reinforcement_Budget_Booster_Icon.svg", true],
		["Flexible Reinforcement Budget", "https://helldivers.wiki.gg/images/4/49/Flexible_Reinforcement_Budget_Booster_Icon.svg", true],
		["Hellpod Space Optimization", "https://helldivers.wiki.gg/images/2/2a/Hellpod_Space_Optimization_Booster_Icon.svg", true],
		["Localization Confusion", "https://helldivers.wiki.gg/images/9/9f/Localization_Confusion_Booster_Icon.svg", true],
		["Expert Extraction Pilot", "https://helldivers.wiki.gg/images/a/af/Expert_Extraction_Pilot_Booster_Icon.svg", true],
		["Motivational Shocks", "https://helldivers.wiki.gg/images/6/64/Motivational_Shocks_Booster_Icon.svg", true],
		["Experimental Infusion", "https://helldivers.wiki.gg/images/2/20/Experimental_Infusion_Booster_Icon.svg", true],
		["Firebomb Hellpods", "https://helldivers.wiki.gg/images/9/9c/Firebomb_Hellpods_Booster_Icon.svg", true],
		["Dead Sprint", "https://helldivers.wiki.gg/images/4/4a/Dead_Sprint_Booster_Icon.svg", true],
		["Armed Resupply Pods", "https://helldivers.wiki.gg/images/3/3a/Armed_Resupply_Pods_Booster_Icon.svg", true],
		["Sample Extricator", "https://helldivers.wiki.gg/images/0/0a/Sample_Extricator_Booster_Icon.png?47f6e3=&format=original", true],
		["No booster", skull, false]
	],[
	// 5 = Armours
		["FS-37 Ravager", "https://helldivers.wiki.gg/images/f/f4/FS-37_Ravager_Body_Armory.png", true],
		["CW-4 Arctic Ranger", "https://helldivers.wiki.gg/images/9/96/CW-4_Arctic_Ranger_Body_Armory.png", true],
		["CE-74 Breaker", "https://helldivers.wiki.gg/images/9/9b/CE-74_Breaker_Body_Armory.png", true],
		["CE-67 Titan", "https://helldivers.wiki.gg/images/b/bc/CE-67_Titan_Body_Armory.png", true],
		["CM-21 Trench Paramedic", "https://helldivers.wiki.gg/images/f/fb/CM-21_Trench_Paramedic_Body_Armory.png", true],
		["CE-07 Demolition Specialist", "https://helldivers.wiki.gg/images/f/f3/CE-07_Demolition_Specialist_Body_Armory.png", true],
		["FS-38 Eradicator", "https://helldivers.wiki.gg/images/2/20/FS-38_Eradicator_Body_Armory.png", true],
		["EX-00 Prototype X", "https://helldivers.wiki.gg/images/d/d3/EX-00_Prototype_X_Body_Armory.png", true],
		["SC-37 Legionnaire", "https://helldivers.wiki.gg/images/8/8c/SC-37_Legionnaire_Body_Armory.png", true],
		["B-08 Light Gunner", "https://helldivers.wiki.gg/images/e/e6/B-08_Light_Gunner_Body_Armory.png", true],
		["SC-30 Trailblazer Scout", "https://helldivers.wiki.gg/images/5/50/SC-30_Trailblazer_Scout_Body_Armory.png", true],
		["SC-34 Infiltrator", "https://helldivers.wiki.gg/images/7/76/SC-34_Infiltrator_Body_Armory.png", true],
		["IE-57 Hell-Bent", "https://helldivers.wiki.gg/images/e/ea/IE-57_Hell-Bent_Body_Armory.png", true],
		["GS-11 Democracy's Deputy", "https://helldivers.wiki.gg/images/thumb/b/bb/GS-11_Democracy%27s_Deputy_Body_Armory.png/300px-GS-11_Democracy%27s_Deputy_Body_Armory.png?233347", true],
		["AF-50 Noxious Ranger", "https://helldivers.wiki.gg/images/8/84/AF-50_Noxious_Ranger_Body_Armory.png", true],
		["UF-16 Inspector", "https://helldivers.wiki.gg/images/3/3c/UF-16_Inspector_Body_Armory.png", true],
		["SR-24 Street Scout", "https://helldivers.wiki.gg/images/9/9b/SR-24_Street_Scout_Body_Armory.png", true],
		["PH-9 Predator", "https://helldivers.wiki.gg/images/3/3d/PH-9_Predator_Body_Armory.png", true],
		["I-09 Heatseeker", "https://helldivers.wiki.gg/images/d/d4/I-09_Heatseeker_Body_Armory.png", true],
		["AC-2 Obedient", "https://helldivers.wiki.gg/images/d/da/AC-2_Obedient_Body_Armory.png", true],
		["SA-25 Steel Trooper", "https://helldivers.wiki.gg/images/c/c8/SA-25_Steel_Trooper_Body_Armory.png", true],
		["SA-12 Servo Assisted", "https://helldivers.wiki.gg/images/3/3a/SA-12_Servo_Assisted_Body_Armory.png", true],
		["DP-00 Tactical", "https://helldivers.wiki.gg/images/b/bd/DP-00_Tactical_Body_Armory.png", true],
		["CE-35 Trench Engineer", "https://helldivers.wiki.gg/images/5/5d/CE-35_Trench_Engineer_Body_Armory.png", true],
		["CE-27 Ground Breaker", "https://helldivers.wiki.gg/images/5/51/CE-27_Ground_Breaker_Body_Armory.png", true],
		["CM-09 Bonesnapper", "https://helldivers.wiki.gg/images/e/ef/CM-09_Bonesnapper_Body_Armory.png", true],
		["CM-10 Clinician", "https://helldivers.wiki.gg/images/a/aa/CM-10_Clinician_Body_Armory.png", true],
		["B-22 Model Citizen", "https://helldivers.wiki.gg/images/d/db/B-22_Model_Citizen_Body_Armory.png", true],
		["SC-15 Drone Master", "https://helldivers.wiki.gg/images/6/63/SC-15_Drone_Master_Body_Armory.png", true],
		["EX-03 Prototype 3", "https://helldivers.wiki.gg/images/8/8f/EX-03_Prototype_3_Body_Armory.png", true],
		["EX-16 Prototype 16", "https://helldivers.wiki.gg/images/d/d7/EX-16_Prototype_16_Body_Armory.png", true],
		["FS-34 Exterminator", "https://helldivers.wiki.gg/images/b/b0/FS-34_Exterminator_Body_Armory.png", true],
		["DP-40 Hero of the Federation", "https://helldivers.wiki.gg/images/1/1e/DP-40_Hero_of_the_Federation_Body_Armory.png", true],
		["TR-9 Cavalier of Democracy", "https://helldivers.wiki.gg/images/0/07/TR-9_Cavalier_of_Democracy_Body_Armory.png?7f1d41&format=original", true],
		["DP-11 Champion of the People", "https://helldivers.wiki.gg/images/d/d8/DP-11_Champion_of_the_People_Body_Armory.png", true],
		["CM-14 Physician", "https://helldivers.wiki.gg/images/c/c5/CM-14_Physician_Body_Armory.png", true],
		["TR-117 Alpha Commander", "https://helldivers.wiki.gg/images/b/b9/TR-117_Alpha_Commander_Body_Armory.png", true],
		["CE-81 Juggernaut", "https://helldivers.wiki.gg/images/7/77/CE-81_Juggernaut_Body_Armory.png", true],
		["DP-53 Savior of the Free", "https://helldivers.wiki.gg/images/5/57/DP-53_Savior_of_the_Free_Body_Armory.png", true],
		["B-24 Enforcer", "https://helldivers.wiki.gg/images/8/82/B-24_Enforcer_Body_Armory.png", true],
		["TR-7 Ambassador of the Brand", "https://helldivers.wiki.gg/images/b/b0/TR-7_Ambassador_of_the_Brand_Body_Armory.png?f3c897&format=original", true],
		["B-01 Tactical", "https://helldivers.wiki.gg/images/7/75/B-01_Tactical_Body_Armory.png", true],
		// ["B-01 Tactical (2)", "https://helldivers.wiki.gg/images/8/84/B-01_Tactical_Body_Armory_2.png", true],
		// ["B-01 Tactical (3)", "https://helldivers.wiki.gg/images/3/31/B-01_Tactical_Body_Armory_3.png", true],
		// ["B-01 Tactical (4)", "https://helldivers.wiki.gg/images/f/f4/B-01_Tactical_Body_Armory_4.png", true],
		["TR-40 Gold Eagle", "https://helldivers.wiki.gg/images/5/52/TR-40_Gold_Eagle_Body_Armory.png", true],
		["AF-91 Field Chemist", "https://helldivers.wiki.gg/images/3/3d/AF-91_Field_Chemist_Body_Armory.png", true],
		["UF-84 Doubt Killer", "https://helldivers.wiki.gg/images/c/c6/UF-84_Doubt_Killer_Body_Armory.png", true],
		["CW-9 White Wolf", "https://helldivers.wiki.gg/images/3/31/CW-9_White_Wolf_Body_Armory.png", true],
		["PH-56 Jaguar", "https://helldivers.wiki.gg/images/f/f7/PH-56_Jaguar_Body_Armory.png", true],
		["I-92 Fire Fighter", "https://helldivers.wiki.gg/images/9/97/I-92_Fire_Fighter_Body_Armory.png", true],
		["SA-04 Combat Technician", "https://helldivers.wiki.gg/images/c/c5/SA-04_Combat_Technician_Body_Armory.png", true],
		["AF-02 Haz-Master", "https://helldivers.wiki.gg/images/f/f7/AF-02_Haz-Master_Body_Armory.png", true],
		["UF-50 Bloodhound", "https://helldivers.wiki.gg/images/a/ad/UF-50_Bloodhound_Body_Armory.png", true],
		["IE-3 Martyr", "https://helldivers.wiki.gg/images/f/f0/IE-3_Martyr_Body_Armory.png", true],
		["IE-12 Righteous", "https://helldivers.wiki.gg/images/b/bd/IE-12_Righteous_Body_Armory.png", true],
		["GS-17 Frontier Marshall", "https://helldivers.wiki.gg/images/b/be/GS-17_Frontier_Marshal_Body_Armory.png?586ae2=&format=original", true],
		["I-102 Draconaught", "https://helldivers.wiki.gg/images/a/ab/I-102_Draconaught_Body_Armory.png", true],
		["AC-1 Dutiful", "https://helldivers.wiki.gg/images/c/c8/AC-1_Dutiful_Body_Armory.png", true],
		["FS-55 Devastator", "https://helldivers.wiki.gg/images/b/be/FS-55_Devastator_Body_Armory.png", true],
		["CW-22 Kodiak", "https://helldivers.wiki.gg/images/2/2e/CW-22_Kodiak_Body_Armory.png", true],
		["SA-32 Dynamo", "https://helldivers.wiki.gg/images/1/15/SA-32_Dynamo_Body_Armory.png", true],
		["CM-17 Butcher", "https://helldivers.wiki.gg/images/f/fb/CM-17_Butcher_Body_Armory.png", true],
		["FS-61 Dreadnought", "https://helldivers.wiki.gg/images/4/4b/FS-61_Dreadnought_Body_Armory.png", true],
		["B-27 Fortified Commando", "https://helldivers.wiki.gg/images/e/eb/B-27_Fortified_Commando_Body_Armory.png", true],
		["FS-05 Marksman", "https://helldivers.wiki.gg/images/4/46/FS-05_Marksman_Body_Armory.png", true],
		["FS-11 Executioner", "https://helldivers.wiki.gg/images/a/ac/FS-11_Executioner_Body_Armory.png", true],
		["AF-52 Lockdown", "https://helldivers.wiki.gg/images/a/a7/AF-52_Lockdown_Body_Armory.png", true],
		["SR-64 Cinderblock", "https://helldivers.wiki.gg/images/c/cc/SR-64_Cinderblock_Body_Armory.png", true],
		["CE-64 Grenadier", "https://helldivers.wiki.gg/images/9/92/CE-64_Grenadier_Body_Armory.png", true],
		["CE-101 Guerilla Gorilla", "https://helldivers.wiki.gg/images/7/75/CE-101_Guerilla_Gorilla_Body_Armory.png", true],
		["I-44 Salamander", "https://helldivers.wiki.gg/images/4/45/I-44_Salamander_Body_Armory.png", true],
		["SR-18 Roadblock", "https://helldivers.wiki.gg/images/9/94/SR-18_Roadblock_Body_Armory.png", true],
		["GS-66 Lawmaker", "https://helldivers.wiki.gg/images/0/0d/GS-66_Lawmaker_Body_Armory.png?3f3c27=&format=original", true],
		["PH-202 Twigsnapper", "https://helldivers.wiki.gg/images/7/75/PH-202_Twigsnapper_Body_Armory.png", true],
		["FS-23 Battle Master", "https://helldivers.wiki.gg/images/0/0e/FS-23_Battle_Master_Body_Armory.png", true],
		["CW-36 Winter Warrior", "https://helldivers.wiki.gg/images/2/2c/CW-36_Winter_Warrior_Body_Armory.png", true],
		["TR-62 Knight", "https://helldivers.wiki.gg/images/9/97/TR-62_Knight_Body_Armory.png?format=original", true]
	]
];

const portraitColumns = 3;
const landscapeColumns = 5;
var columnCount = 5;

// [date], [difficulty], [mission], [enemy], [endgame], [score], [chaos], [loadoutArray]
var savedRuns = [];
let pulledRuns = JSON.parse(localStorage.getItem('savedRunsLocal'));

if (pulledRuns) {
	savedRuns = pulledRuns;
}

var userMaster = [];
let pulledMaster = JSON.parse(localStorage.getItem('userMasterLocal'));

if (pulledMaster) {
	var tempMaster = [[],[],[],[],[],[]];
	for (var x = 0; x < MasterList.length; x++) {
		for (var y = 0; y < MasterList[x].length; y++) {
			const indexHolder = pulledMaster[x].findIndex(innerArray => innerArray.includes(MasterList[x][y][0]));
			if (indexHolder == -1) {
				tempMaster[x].push(MasterList[x][y]);
			} else {
				tempMaster[x].push(pulledMaster[x][indexHolder]);
			}
		}
	}
	userMaster = tempMaster;
} else {
	userMaster = MasterList;
}

var currentDifficulty = 0;
var currentMission = 1;
var currentEnemy = "null";
var currentEndgameRound = 1;
var currentScore = 0;
var currentChaos = false;
var currentLoadout = [
	0,
	0,
	2,
	41,
	userMaster[3].length - 1,
	userMaster[3].length - 1,
	userMaster[3].length - 1,
	userMaster[3].length - 1,
	userMaster[4].length - 1
];
var currentSaveIndex = savedRuns.length;

function saveGame() {
	var contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'none';});
	document.getElementById('topLoad').style.display = 'none';
	document.getElementById('bottomLoad').style.display = 'none';
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'none';});
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'none');
	
	let currentDate = new Date();
	let day = currentDate.getDate(); 
	let month = currentDate.getMonth() + 1; 
	let year = currentDate.getFullYear(); 
	let formattedDate = `${month}/${day}/${year}`;
	
	savedRuns[currentSaveIndex] = [formattedDate, currentDifficulty, currentMission, currentEnemy, currentEndgameRound, currentScore, currentChaos, currentLoadout];
	localStorage.setItem('savedRunsLocal', JSON.stringify(savedRuns));
	
	contents = document.querySelectorAll('.game-button');
	contents.forEach(content => content.style.display = 'flex');
	contents = document.querySelectorAll('.continue-button');
	contents.forEach(content => content.style.display = 'flex');
}

function autoSaveGame() {
	let currentDate = new Date();
	let day = currentDate.getDate(); 
	let month = currentDate.getMonth() + 1; 
	let year = currentDate.getFullYear(); 
	let formattedDate = `${month}/${day}/${year}`;
	
	savedRuns[currentSaveIndex] = [formattedDate, currentDifficulty, currentMission, currentEnemy, currentEndgameRound, currentScore, currentChaos, currentLoadout];
	localStorage.setItem('savedRunsLocal', JSON.stringify(savedRuns));
}

function countTrues (category) {
	var count = 0;
	
	if (category != 3) {
		for (var x = 0; x < userMaster[category].length; x++) {
			if (userMaster[category][x][2]) {
				count++;
			}
		}
		
		if (count < 5) {
			return true;
		} else {
			return false;
		}
	} else {
		for (var x = 0; x < userMaster[category].length; x++) {
			if (userMaster[category][x][2]) {
				count++;
			}
		}
		
		if (count < 9) {
			return true;
		} else {
			return false;
		}
	}
}

function createTable(data, tableName, include) {
	
	// Create the table element
	const table = document.createElement('table');
	
	var cat = 0;
	
	if (tableName == 'table-primary') {
		cat = 0;
	} else if (tableName == 'table-side') {
		cat = 1;
	} else if (tableName == 'table-throw') {
		cat = 2;
	} else if (tableName == 'table-strat') {
		cat = 3;
	} else if (tableName == 'table-boost') {
		cat = 4;
	} else if (tableName == 'table-armour') {
		cat = 5;
	}

	// Loop through the array and create table rows     for (var r = 0; r < ((Math.ceil(data.length / columnCount))*3); r++) { for (var r = 0; r < ((Math.floor(data.length / columnCount)) + ((data.length % columnCount) * 3)); r++) {
	if (include){
		for (var r = 0; r < (data.length * columnCount); r++) {
			const tr = document.createElement('tr');
			if (Math.floor(r / 3) % 2 == 1) {
				tr.style.backgroundColor = '#828282';
			}
			for (var d = 0; d < columnCount; d++){
				const td = document.createElement('td');
				td.style.width = 100 / columnCount + '%';
				if (!data[d + (columnCount*Math.floor(r / 3))]) {
					break;
				}
				if (r % 3 == 0) {
					td.style.fontWeight = 'bold';
					td.textContent = data[d + (columnCount*Math.floor(r / 3))][0];
					tr.appendChild(td);
					table.appendChild(tr);
				} else if (r % 3 == 1) {
					const img = document.createElement('img');
					img.height = 150;
					img.src = data[d + (columnCount*Math.floor(r / 3))][1]; // Set the image source
					td.appendChild(img);
					tr.appendChild(td);
					table.appendChild(tr);
				} else if (r % 3 == 2) {
					const checkbox = document.createElement("input");
					const placeholder = d + (columnCount*Math.floor(r / 3));
					var odd = false;
					const coordY = r;
					const coordX = d;
					checkbox.type = "checkbox";
					checkbox.style.accentColor = '#FFE80A';
					checkbox.style.zIndex = '1';
					checkbox.id = `checkbox-${placeholder}`;
					checkbox.classList.add("custom-checkbox");
					checkbox.checked = data[placeholder][2];
					checkbox.addEventListener("change", (event) => {
						var odd = false;
						if (Math.floor(coordY / 3) % 2 == 1) {
							odd = true;
						}
						if (event.target.checked) {  
							data[placeholder][2] = true;
							if (!odd) {
								table.rows[coordY-2].cells[coordX].style.backgroundColor = '#999999';
								table.rows[coordY-1].cells[coordX].style.backgroundColor = '#999999';
								table.rows[coordY].cells[coordX].style.backgroundColor = '#999999';
							} else {
								table.rows[coordY-2].cells[coordX].style.backgroundColor = '#828282';
								table.rows[coordY-1].cells[coordX].style.backgroundColor = '#828282';
								table.rows[coordY].cells[coordX].style.backgroundColor = '#828282';
							}
						} else {
							if (countTrues(cat)) {
								checkbox.checked = true;
								data[placeholder][2] = true;
								if (!odd) {
									table.rows[coordY-2].cells[coordX].style.backgroundColor = '#999999';
									table.rows[coordY-1].cells[coordX].style.backgroundColor = '#999999';
									table.rows[coordY].cells[coordX].style.backgroundColor = '#999999';
								} else {
									table.rows[coordY-2].cells[coordX].style.backgroundColor = '#828282';
									table.rows[coordY-1].cells[coordX].style.backgroundColor = '#828282';
									table.rows[coordY].cells[coordX].style.backgroundColor = '#828282';
								}
							} else {
								data[placeholder][2] = false;
								table.rows[coordY-2].cells[coordX].style.backgroundColor = '#B81111';
								table.rows[coordY-1].cells[coordX].style.backgroundColor = '#B81111';
								table.rows[coordY].cells[coordX].style.backgroundColor = '#B81111';
							}
						}
						localStorage.setItem('userMasterLocal', JSON.stringify(userMaster));
					});
					td.appendChild(checkbox);
					tr.appendChild(td);
					table.appendChild(tr);
					if (!data[d + (columnCount*Math.floor(r / 3))][2]) {
						table.rows[coordY-2].cells[coordX].style.backgroundColor = '#B81111';
						table.rows[coordY-1].cells[coordX].style.backgroundColor = '#B81111';
						table.rows[coordY].cells[coordX].style.backgroundColor = '#B81111';
					}
				}
//
			}
		}
	} else {
		for (var r = 0; r < (data.length * columnCount); r++) {
			const tr = document.createElement('tr');
			if (Math.floor(r / 3) % 2 == 1) {
				tr.style.backgroundColor = '#828282';
			}
			for (var d = 0; d < columnCount; d++){
				const td = document.createElement('td');
				td.style.width = 100 / columnCount + '%';
				if (!data[d + (columnCount*Math.floor(r / 3))] || data[d + (columnCount*Math.floor(r / 3))][0] == "Empty slot" || data[d + (columnCount*Math.floor(r / 3))][0] == "No booster") {
					break;
				}
				if (r % 3 == 0) {
					td.style.fontWeight = 'bold';
					td.textContent = data[d + (columnCount*Math.floor(r / 3))][0];
					tr.appendChild(td);
					table.appendChild(tr);
				} else if (r % 3 == 1) {
					const img = document.createElement('img');
					img.height = 150;
					img.src = data[d + (columnCount*Math.floor(r / 3))][1]; // Set the image source    img.src = data[(((r-1)*columnCount) + d)][1];
					td.appendChild(img);
					tr.appendChild(td);
					table.appendChild(tr);
				} else if (r % 3 == 2) {
					const checkbox = document.createElement("input");
					const placeholder = d + (columnCount*Math.floor(r / 3));
					var odd = false;
					const coordY = r;
					const coordX = d;
					checkbox.type = "checkbox";
					checkbox.style.accentColor = '#FFE80A';
					checkbox.style.zIndex = '1';
					checkbox.id = `checkbox-${placeholder}`;
					checkbox.classList.add("custom-checkbox");
					checkbox.checked = data[placeholder][2];
					checkbox.addEventListener("change", (event) => {
						var odd = false;
						if (Math.floor(coordY / 3) % 2 == 1) {
							odd = true;
						}
						if (event.target.checked) {  
							data[placeholder][2] = true;
							if (!odd) {
								table.rows[coordY-2].cells[coordX].style.backgroundColor = '#999999';
								table.rows[coordY-1].cells[coordX].style.backgroundColor = '#999999';
								table.rows[coordY].cells[coordX].style.backgroundColor = '#999999';
							} else {
								table.rows[coordY-2].cells[coordX].style.backgroundColor = '#828282';
								table.rows[coordY-1].cells[coordX].style.backgroundColor = '#828282';
								table.rows[coordY].cells[coordX].style.backgroundColor = '#828282';
							}
						} else {
							if (countTrues(cat)) {
								checkbox.checked = true;
								data[placeholder][2] = true;
								if (!odd) {
									table.rows[coordY-2].cells[coordX].style.backgroundColor = '#999999';
									table.rows[coordY-1].cells[coordX].style.backgroundColor = '#999999';
									table.rows[coordY].cells[coordX].style.backgroundColor = '#999999';
								} else {
									table.rows[coordY-2].cells[coordX].style.backgroundColor = '#828282';
									table.rows[coordY-1].cells[coordX].style.backgroundColor = '#828282';
									table.rows[coordY].cells[coordX].style.backgroundColor = '#828282';
								}
							} else {
								data[placeholder][2] = false;
								table.rows[coordY-2].cells[coordX].style.backgroundColor = '#B81111';
								table.rows[coordY-1].cells[coordX].style.backgroundColor = '#B81111';
								table.rows[coordY].cells[coordX].style.backgroundColor = '#B81111';
							}
						}
						localStorage.setItem('userMasterLocal', JSON.stringify(userMaster));
					});
					td.appendChild(checkbox);
					tr.appendChild(td);
					table.appendChild(tr);
					if (!data[d + (columnCount*Math.floor(r / 3))][2]) {
						table.rows[coordY-2].cells[coordX].style.backgroundColor = '#B81111';
						table.rows[coordY-1].cells[coordX].style.backgroundColor = '#B81111';
						table.rows[coordY].cells[coordX].style.backgroundColor = '#B81111';
					}
				}
//
			}
		}
	}
	// Add the table to the container
	const container = document.getElementById(tableName);
	container.appendChild(table);
}

function createResultTable(data, tableName) {
	// Create the table element
	const table = document.createElement('table');

	// Loop through the array and create table rows
	data.forEach((row, rowIndex) => {
		if (rowIndex !== data.length) {
			const tr = document.createElement('tr');

			row.forEach((cell, cellIndex) => {
				const td = document.createElement('td'); // Use <th> for header row
				td.style.fontWeight = 'bold';
				td.style.fontSize = '20px';
				td.textContent = cell; // Otherwise just add text
				tr.appendChild(td);
			});

			table.appendChild(tr);
		}
	});
	// Add the table to the container
	const container = document.getElementById(tableName);
	container.appendChild(table);
}

function pickUpRun(savedData, oldSaveIndex) {
	currentDifficulty = savedData[1];
	currentMission = savedData[2];
	currentEnemy = savedData[3];
	currentEndgameRound = savedData[4];
	currentScore = savedData[5];
	currentChaos = savedData[6];
	currentLoadout = savedData[7];
	
	if ((currentMission - 1) == 0) {
		if ((currentDifficulty - 1) >= 0 && (currentDifficulty - 1) < 3) {
			currentDifficulty--;
			currentScore = currentScore - currentDifficulty;
		} else if ((currentDifficulty - 1) >= 3 && (currentDifficulty - 1) < 5) {
			currentDifficulty--;
			currentMission = 2;
			currentScore = currentScore - currentDifficulty;
		} else {
			currentDifficulty--;
			currentMission = 3;
			currentScore = currentScore - currentDifficulty;
		}
	} else {
		currentMission--;
		currentScore = currentScore - currentDifficulty;
	}
	
	updateMission();
	generateLoadoutTable();
	currentSaveIndex = oldSaveIndex;
	
	var contents = document.querySelectorAll('.game-button');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.continue-button');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.continue-row');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.results-row');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	document.getElementById('topLoad').style.display = 'flex';
	document.getElementById('bottomLoad').style.display = 'flex';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'flex');
}

function createRunsTable(data, tableName) {
	// Create the table element
	const table = document.createElement('table');
	
	const headerRow = document.createElement('tr');

	// Array of header names [id], [date], [difficulty], [mission], [enemy], [endgame], [score], [chaos], [loadoutArray]
	const headers = ['Run', 'Difficulty', 'Enemy', 'Mission', 'Pandemonium', 'Date', 'Resume run?', 'Delete run?'];

	// Loop through the headers and create <th> elements
	headers.forEach(headerText => {
		const th = document.createElement('th');
		th.textContent = headerText;  // Set the text of the header
		th.style.border = '1px solid black';  // Add border to the header
		headerRow.appendChild(th);  // Append the header cell to the header row
	});

	// Append the header row to the table
	table.appendChild(headerRow);
	
	var idCount = 0;

	// Loop through the array and create table rows
	data.forEach((row, rowIndex) => {
		idCount++;
		if (rowIndex !== data.length) {
			const tr = document.createElement('tr');
			const id = document.createElement('td');
			const date = document.createElement('td');
			const diff = document.createElement('td');
			const miss = document.createElement('td');
			const enemy = document.createElement('td');
			const pan = document.createElement('td');
			const butt = document.createElement('button');
			const del = document.createElement('button');
			butt.innerText = 'Resume';
			del.innerText = 'Delete';
			id.textContent = idCount;

			row.forEach((cell, cellIndex) => {
				const saveIndex = idCount - 1;
				if (cellIndex == 0) {
					date.textContent = cell;
				} else if (cellIndex == 1) {
					diff.textContent = cell;
				} else if (cellIndex == 2) {
					miss.textContent = cell;
				} else if (cellIndex == 3) {
					enemy.textContent = cell;
				} else if (cellIndex == 6) {
					if (cell) {
						pan.textContent = "Yes";
					} else {
						pan.textContent = "No";
					}
				} else if (cellIndex == 5) {
					butt.onclick = function() {pickUpRun(data[saveIndex], saveIndex);};
				} else if (cellIndex == 4) {
					del.onclick = function() {savedRuns.splice(saveIndex, 1); localStorage.setItem('savedRunsLocal', JSON.stringify(savedRuns)); currentSaveIndex = savedRuns.length; resumeGame();};
				}
			});
			tr.appendChild(id);
			tr.appendChild(diff);
			tr.appendChild(enemy);
			tr.appendChild(miss);
			tr.appendChild(pan);
			tr.appendChild(date);
			tr.insertCell(6).innerHTML = '';
			tr.insertCell(6).appendChild(butt);
			tr.insertCell(7).innerHTML = '';
			tr.insertCell(7).appendChild(del);
			tr.deleteCell(8);
			tr.deleteCell(8);
			
			table.appendChild(tr);
		}
	});
	// Add the table to the container
	const container = document.getElementById(tableName);
	container.appendChild(table);
}

function getThreeUnique(max, category) {
	const numbers = new Set();

	while (numbers.size < 3) {
		const randomNumber = Math.floor(Math.random() * max);
		if (!userMaster[category][randomNumber][2]) {
			continue;
		} else {
			numbers.add(randomNumber);  // Add the random number to the set (duplicates are automatically ignored)
		}
	}

	const temp = Array.from(numbers);
	return temp;  // Convert the set back to an array
}

function getThreeUniqueNoDup(max, category) {
	const numbers = new Set();
	
	while (numbers.size < 3) {
		const randomNumber = Math.floor(Math.random() * max);
		// Check for already equipped items
		if ((category == 0 && randomNumber == currentLoadout[0]) || 
			(category == 1 && randomNumber == currentLoadout[1]) || 
			(category == 2 && randomNumber == currentLoadout[2]) || 
			(category == 5 && randomNumber == currentLoadout[3]) ||
			(category == 4 && randomNumber == currentLoadout[8]) ||
			(category == 3 && (randomNumber == currentLoadout[4] || randomNumber == currentLoadout[5] || randomNumber == currentLoadout[6] || randomNumber == currentLoadout[7])) ||
			(!userMaster[category][randomNumber][2])) {
				continue;
		} else {
			numbers.add(randomNumber);  // Add the random number to the set (duplicates are automatically ignored)
		}
	}

	const temp = Array.from(numbers);
	temp.push(temp[0]);
	temp.push(temp[0]);
	return temp;  // Convert the set back to an array
}

function roll () {
	const categorySelections = [];
	for (let i = 0; i < 3; i++) {
		const x = Math.floor(Math.random() * 6);
		categorySelections.push(x);
	}

	const threeUnique = [];
	threeUnique.push(getThreeUnique(userMaster[0].length, 0));
	threeUnique.push(getThreeUnique(userMaster[1].length, 1));
	threeUnique.push(getThreeUnique(userMaster[2].length, 2));
	threeUnique.push(getThreeUnique((userMaster[3].length - 1), 3));
	threeUnique.push(getThreeUnique((userMaster[4].length - 1), 4));
	threeUnique.push(getThreeUnique(userMaster[5].length, 5));

	const finalResults = [
		[userMaster[categorySelections[0]][threeUnique[categorySelections[0]][0]][0], userMaster[categorySelections[0]][threeUnique[categorySelections[0]][0]][1]],
		[userMaster[categorySelections[1]][threeUnique[categorySelections[1]][1]][0], userMaster[categorySelections[1]][threeUnique[categorySelections[1]][1]][1]],
		[userMaster[categorySelections[2]][threeUnique[categorySelections[2]][2]][0], userMaster[categorySelections[2]][threeUnique[categorySelections[2]][2]][1]]
	];

	const table = document.createElement('table');
	table.style.height = 'auto';

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
			row.style.fontWeight = 'bold';
			row.insertCell(0).innerHTML = finalResults[0][0];
			row.insertCell(1).innerHTML = finalResults[1][0];
			row.insertCell(2).innerHTML = finalResults[2][0];
		} else {
			const img1 = document.createElement('img');
			img1.src = finalResults[0][1];
			const img2 = document.createElement('img');
			img2.src = finalResults[1][1];
			const img3 = document.createElement('img');
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
	
	return table;
}

function generateLoadoutTable() {
	const topTable = document.createElement('table');
	const bottomTable = document.createElement('table');
	topTable.style.height = 'auto';
	bottomTable.style.height = 'auto';
	bottomTable.style.align = 'center';

	const topHeaderRow = document.createElement('tr');
	const bottomHeaderRow = document.createElement('tr');

	// Array of header names
	const topHeaders = ['Primary Weapon', 'Side Arm', 'Throwable', 'Armour'];
	const bottomHeaders = ['Stratagem 1', 'Stratagem 2', 'Stratagem 3', 'Stratagem 4', 'Booster'];

	// Loop through the headers and create <th> elements
	topHeaders.forEach(headerText => {
		const th = document.createElement('th');
		th.textContent = headerText;  // Set the text of the header
		th.style.border = '1px solid black';  // Add border to the header
		topHeaderRow.appendChild(th);  // Append the header cell to the header row
	});
	
	bottomHeaders.forEach(headerText => {
		const th = document.createElement('th');
		th.textContent = headerText;  // Set the text of the header
		th.style.border = '1px solid black';  // Add border to the header
		bottomHeaderRow.appendChild(th);  // Append the header cell to the header row
	});

	// Append the header row to the table
	topTable.appendChild(topHeaderRow);
	bottomTable.appendChild(bottomHeaderRow);

	for(var i = 1; i < 3; i++) {
		var row = topTable.insertRow(i);
		var row2 = bottomTable.insertRow(i);
		if (i == 1) {
			row.style.fontWeight = 'bold';
			row2.style.fontWeight = 'bold';
			row.insertCell(0).innerHTML = userMaster[0][currentLoadout[0]][0];
			row.insertCell(1).innerHTML = userMaster[1][currentLoadout[1]][0];
			row.insertCell(2).innerHTML = userMaster[2][currentLoadout[2]][0];
			row.insertCell(3).innerHTML = userMaster[5][currentLoadout[3]][0];
			row2.insertCell(0).innerHTML = userMaster[3][currentLoadout[4]][0];
			row2.insertCell(1).innerHTML = userMaster[3][currentLoadout[5]][0];
			row2.insertCell(2).innerHTML = userMaster[3][currentLoadout[6]][0];
			row2.insertCell(3).innerHTML = userMaster[3][currentLoadout[7]][0];
			row2.insertCell(4).innerHTML = userMaster[4][currentLoadout[8]][0];
		} else {
			row.insertCell(0).innerHTML = '';
			row.insertCell(1).innerHTML = '';
			row.insertCell(2).innerHTML = '';
			row.insertCell(3).innerHTML = '';
			row2.insertCell(0).innerHTML = '';
			row2.insertCell(1).innerHTML = '';
			row2.insertCell(2).innerHTML = '';
			row2.insertCell(3).innerHTML = '';
			row2.insertCell(4).innerHTML = '';
			var cell = row.cells[0];
			const img = [document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img'), 
							document.createElement('img')
						]
			img[0].src = userMaster[0][currentLoadout[0]][1];
			img[1].src = userMaster[1][currentLoadout[1]][1];
			img[2].src = userMaster[2][currentLoadout[2]][1];
			img[3].src = userMaster[5][currentLoadout[3]][1];
			img[4].src = userMaster[3][currentLoadout[4]][1];
			img[5].src = userMaster[3][currentLoadout[5]][1];
			img[6].src = userMaster[3][currentLoadout[6]][1];
			img[7].src = userMaster[3][currentLoadout[7]][1];
			img[8].src = userMaster[4][currentLoadout[8]][1];
			
			for (var x = 0; x < 4; x++) {
				cell = row.cells[x];
				cell.appendChild(img[x]);
			}
			
			for (var x = 0; x < 5; x++) {
				cell = row2.cells[x];
				cell.appendChild(img[x+4]);
			}
		}
	}

	const container = document.getElementById('topLoad');
	const container2 = document.getElementById('bottomLoad');
	container.innerHTML = '';
	container2.innerHTML = '';
	container.appendChild(topTable);
	container2.appendChild(bottomTable);
}

function swap(selection, count) {
	document.getElementById('messageText').innerText = "You have no available Stratagem slots. Select one to replace.";
	const message = document.querySelectorAll('.message');
	message.forEach(function(button){button.style.display = 'flex';});
	const topTable = document.createElement('table');
	const bottomTable = document.createElement('table');
	topTable.style.height = 'auto';
	bottomTable.style.height = 'auto';
	bottomTable.style.align = 'center';

	const topHeaderRow = document.createElement('tr');
	const bottomHeaderRow = document.createElement('tr');

	// Array of header names
	const bottomHeaders = ['Stratagem 1', 'Stratagem 2', 'Stratagem 3', 'Stratagem 4'];

	const thx = document.createElement('th');
	thx.textContent = 'Selection'; 
	thx.style.border = '1px solid black'; 
	topHeaderRow.appendChild(thx);

	// Loop through the headers and create <th> elements
	bottomHeaders.forEach(headerText => {
		const th = document.createElement('th');
		th.textContent = headerText;  // Set the text of the header
		th.style.border = '1px solid black';  // Add border to the header
		bottomHeaderRow.appendChild(th);  // Append the header cell to the header row
	});

	// Append the header row to the table
	topTable.appendChild(topHeaderRow);
	bottomTable.appendChild(bottomHeaderRow);

	for(var i = 1; i < 3; i++) {
		var row = topTable.insertRow(i);
		if (i == 1) {
			row.style.fontWeight = 'bold';
			row.insertCell(0).innerHTML = userMaster[3][selection][0];
		} else {
			const img = document.createElement('img');
			img.src = userMaster[3][selection][1];
			row.insertCell(0).innerHTML = '';
			var cell = row.cells[0];
			cell.appendChild(img);
		}
	}

	for(var i = 1; i < 4; i++) {
		var row = bottomTable.insertRow(i);
		if (i == 1) {
			row.style.fontWeight = 'bold';
			row.insertCell(0).innerHTML = userMaster[3][currentLoadout[4]][0];
			row.insertCell(1).innerHTML = userMaster[3][currentLoadout[5]][0];
			row.insertCell(2).innerHTML = userMaster[3][currentLoadout[6]][0];
			row.insertCell(3).innerHTML = userMaster[3][currentLoadout[7]][0];
		} else if (i == 2) {
			row.insertCell(0).innerHTML = '';
			row.insertCell(1).innerHTML = '';
			row.insertCell(2).innerHTML = '';
			row.insertCell(3).innerHTML = '';
			var cell = row.cells[0];
			for (var x = 0; x < 4; x++) {
				const img = document.createElement('img');
				img.src = userMaster[3][currentLoadout[x+4]][1];
				cell = row.cells[x];
				cell.appendChild(img);
			}
		} else {
			const button1 = document.createElement('button');
			button1.innerText = 'Replace';
			button1.onclick = function() {
				currentLoadout[4] = selection;
				if (count == 1) {
					generateLoadoutTable();
					var contents = document.querySelectorAll('.game-row');
					contents.forEach(function(button){button.style.display = 'flex';});
					document.getElementById('topLoad').style.display = 'flex';
					document.getElementById('bottomLoad').style.display = 'flex';
					contents = document.querySelectorAll('.save-button');
					contents.forEach(content => content.style.display = 'flex');
					autoSaveGame();
					document.getElementById('roll-results').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
				} else {
					document.getElementById('topLoad').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
					document.getElementById('bottomLoad').style.display = 'none';
					const container = document.getElementById('roll-results');
					container.innerHTML = '';
					container.appendChild(rollSelect(1));
					container.style.display = 'flex';
				}};
			const button2 = document.createElement('button');
			button2.innerText = 'Replace';
			button2.onclick = function() {
				currentLoadout[5] = selection;
				if (count == 1) {
					generateLoadoutTable();
					var contents = document.querySelectorAll('.game-row');
					contents.forEach(function(button){button.style.display = 'flex';});
					document.getElementById('topLoad').style.display = 'flex';
					document.getElementById('bottomLoad').style.display = 'flex';
					contents = document.querySelectorAll('.save-button');
					contents.forEach(content => content.style.display = 'flex');
					autoSaveGame();
					document.getElementById('roll-results').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
				} else {
					document.getElementById('topLoad').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
					document.getElementById('bottomLoad').style.display = 'none';
					const container = document.getElementById('roll-results');
					container.innerHTML = '';
					container.appendChild(rollSelect(1));
					container.style.display = 'flex';
				}};
			const button3 = document.createElement('button');
			button3.innerText = 'Replace';
			button3.onclick = function() {
				currentLoadout[6] = selection;
				if (count == 1) {
					generateLoadoutTable();
					var contents = document.querySelectorAll('.game-row');
					contents.forEach(function(button){button.style.display = 'flex';});
					document.getElementById('topLoad').style.display = 'flex';
					document.getElementById('bottomLoad').style.display = 'flex';
					contents = document.querySelectorAll('.save-button');
					contents.forEach(content => content.style.display = 'flex');
					autoSaveGame();
					document.getElementById('roll-results').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
				} else {
					document.getElementById('topLoad').style.display = 'none';
					document.getElementById('bottomLoad').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
					const container = document.getElementById('roll-results');
					container.innerHTML = '';
					container.appendChild(rollSelect(1));
					container.style.display = 'flex';
				}};
			const button4 = document.createElement('button');
			button4.innerText = 'Replace';
			button4.onclick = function() {
				currentLoadout[7] = selection;
				if (count == 1) {
					generateLoadoutTable();
					var contents = document.querySelectorAll('.game-row');
					contents.forEach(function(button){button.style.display = 'flex';});
					document.getElementById('topLoad').style.display = 'flex';
					document.getElementById('bottomLoad').style.display = 'flex';
					contents = document.querySelectorAll('.save-button');
					contents.forEach(content => content.style.display = 'flex');
					autoSaveGame();
					document.getElementById('roll-results').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
				} else {
					document.getElementById('topLoad').style.display = 'none';
					document.getElementById('bottomLoad').style.display = 'none';
					message.forEach(function(button){button.style.display = 'none';});
					const container = document.getElementById('roll-results');
					container.innerHTML = '';
					container.appendChild(rollSelect(1));
					container.style.display = 'flex';
				}};
			row.insertCell(0).innerHTML = '';
			row.insertCell(1).innerHTML = '';
			row.insertCell(2).innerHTML = '';
			row.insertCell(3).innerHTML = '';
			var cell = row.cells[0];
			cell.appendChild(button1);
			cell = row.cells[1];
			cell.appendChild(button2);
			cell = row.cells[2];
			cell.appendChild(button3);
			cell = row.cells[3];
			cell.appendChild(button4);
		}
	}
	const container = document.getElementById('topLoad');
	const container2 = document.getElementById('bottomLoad');
	container.innerHTML = '';
	container2.innerHTML = '';
	container.appendChild(topTable);
	container2.appendChild(bottomTable);
	document.getElementById('topLoad').style.display = 'flex';
	document.getElementById('bottomLoad').style.display = 'flex';
}

function choose(category, selection, count) {
	var swapping = false;
	if (category == 0) { // primary
		currentLoadout[0] = selection;
	} else if (category == 1) { // side
		currentLoadout[1] = selection;
	} else if (category == 2) { // throw
		currentLoadout[2] = selection;
	} else if (category == 3) { //strat
		if (currentLoadout[4] == userMaster[3].length - 1) {
			currentLoadout[4] = selection;
		} else if (currentLoadout[5] == userMaster[3].length - 1) {
			currentLoadout[5] = selection;
		} else if (currentLoadout[6] == userMaster[3].length - 1) {
			currentLoadout[6] = selection;
		} else if (currentLoadout[7] == userMaster[3].length - 1) {
			currentLoadout[7] = selection;
		} else {
			swapping = true;
			document.getElementById('roll-results').style.display = 'none';
			swap(selection, count);
		}
	} else if (category == 4) { // boost
		currentLoadout[8] = selection;
	} else if (category == 5) { //armour
		currentLoadout[3] = selection;
	}
	
	if (count == 1 && !swapping) {
		generateLoadoutTable();
		var contents = document.querySelectorAll('.game-row');
		contents.forEach(function(button){button.style.display = 'flex';});
		document.getElementById('topLoad').style.display = 'flex';
		document.getElementById('bottomLoad').style.display = 'flex';
		contents = document.querySelectorAll('.save-button');
		contents.forEach(content => content.style.display = 'flex');
		autoSaveGame();
		document.getElementById('roll-results').style.display = 'none';
	} else if (!swapping) {
		const container = document.getElementById('roll-results');
		container.innerHTML = '';
		container.appendChild(rollSelect(1));
		container.style.display = 'flex';
	}	
}

function rollSelect (count) {
	const categorySelections = [];
	for (let i = 0; i < 3; i++) {
		const x = Math.floor(Math.random() * 6);
		categorySelections.push(x);
	}

	const threeUnique = [];
	threeUnique.push(getThreeUniqueNoDup(userMaster[0].length, 0));
	threeUnique.push(getThreeUniqueNoDup(userMaster[1].length, 1));
	threeUnique.push(getThreeUniqueNoDup(userMaster[2].length, 2));
	threeUnique.push(getThreeUniqueNoDup((userMaster[3].length - 1), 3));
	threeUnique.push(getThreeUniqueNoDup((userMaster[4].length - 1), 4));
	threeUnique.push(getThreeUniqueNoDup(userMaster[5].length, 5));

	const finalResults = [
		[userMaster[categorySelections[0]][threeUnique[categorySelections[0]][0]][0], userMaster[categorySelections[0]][threeUnique[categorySelections[0]][0]][1]],
		[userMaster[categorySelections[1]][threeUnique[categorySelections[1]][1]][0], userMaster[categorySelections[1]][threeUnique[categorySelections[1]][1]][1]],
		[userMaster[categorySelections[2]][threeUnique[categorySelections[2]][2]][0], userMaster[categorySelections[2]][threeUnique[categorySelections[2]][2]][1]]
	];

	const table = document.createElement('table');
	table.style.height = 'auto';

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

	for(var i = 1; i < 5; i++) {
		var row = table.insertRow(i);
		if (i == 1) {
			row.style.fontWeight = 'bold';
			row.insertCell(0).innerHTML = finalResults[0][0];
			row.insertCell(1).innerHTML = finalResults[1][0];
			row.insertCell(2).innerHTML = finalResults[2][0];
		} else if (i == 2) {
			const img1 = document.createElement('img');
			img1.src = finalResults[0][1];
			const img2 = document.createElement('img');
			img2.src = finalResults[1][1];
			const img3 = document.createElement('img');
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
		} else if (i == 3){
			const button1 = document.createElement('button');
			button1.innerText = 'Select';
			button1.onclick = function() {choose(categorySelections[0], threeUnique[categorySelections[0]][0], count)};
			const button2 = document.createElement('button');
			button2.innerText = 'Select';
			button2.onclick = function() {choose(categorySelections[1], threeUnique[categorySelections[1]][1], count)};
			const button3 = document.createElement('button');
			button3.innerText = 'Select';
			button3.onclick = function() {choose(categorySelections[2], threeUnique[categorySelections[2]][2], count)};
			row.insertCell(0).innerHTML = '';
			row.insertCell(1).innerHTML = '';
			row.insertCell(2).innerHTML = '';
			var cell = row.cells[0];
			cell.appendChild(button1);
			cell = row.cells[1];
			cell.appendChild(button2);
			cell = row.cells[2];
			cell.appendChild(button3);
		} else {
			const button = document.createElement('button');
			button.innerText = 'Pass';
			button.onclick = function() {choose(6, 0, count)};
			row.insertCell(0).innerHTML = '';
			row.insertCell(1).innerHTML = '';
			var cell = row.cells[0];
			cell = row.cells[1];
			cell.appendChild(button);
		}
	}
	
	return table;
}

function changeMessage() {
	const container = document.getElementById('table-results');
	container.innerHTML = '';
	container.appendChild(roll());
}

// Pick a random faction and return the faction as a string (for chaos mode)
function pickEnemy() {
	const x = Math.floor(Math.random() * 3);
	var enemy = "null";
	
	if (x == 0) {
		enemy = "Terminids";
	} else if (x == 1) {
		enemy = "Automatons";
	} else {
		enemy = "Illuminate";
	}
	
	return enemy;
}

function newGame() {
	// Hide new game and continue buttons
	var contents = document.querySelectorAll('.game-button');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.continue-button');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.continue-row');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.results-row');
	contents.forEach(content => content.style.display = 'none');
	
	currentDifficulty = 0;
	currentMission = 1;
	currentEnemy = "null";
	currentEndgameRound = 1;
	currentScore = 0;
	currentChaos = false;
	currentLoadout = [
		0,
		0,
		2,
		41,
		userMaster[3].length - 1,
		userMaster[3].length - 1,
		userMaster[3].length - 1,
		userMaster[3].length - 1,
		userMaster[4].length - 1
	];
	currentSaveIndex = savedRuns.length;
	
	// Display enemy selection buttons
	contents = document.querySelectorAll('.enemy-row');
	contents.forEach(function(button){button.style.display = 'flex';});
}

function updateMission() {
	if (currentDifficulty == 0 || currentDifficulty == 1 || currentDifficulty == 2) {
		currentScore += currentDifficulty;
		currentDifficulty++;
		if (currentChaos) {
			currentEnemy = pickEnemy();
		}
		if (currentDifficulty == 1 || currentDifficulty == 2) {
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy;
		} else {
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy + " Mission " + currentMission + " of 2";
		}
	} else if (currentDifficulty == 3 || currentDifficulty == 4) {
		if (currentMission == 1) {
			currentScore += currentDifficulty;
			currentMission++;
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy + " Mission " + currentMission + " of 2";
		} else if (currentDifficulty == 3) {
			currentScore += currentDifficulty;
			currentDifficulty++;
			if (currentChaos) {
				currentEnemy = pickEnemy();
			}
			currentMission = 1;
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy + " Mission " + currentMission + " of 2";
		} else {
			currentScore += currentDifficulty;
			currentDifficulty++;
			if (currentChaos) {
				currentEnemy = pickEnemy();
			}
			currentMission = 1;
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy + " Mission " + currentMission + " of 3";
		}
	} else if (currentDifficulty < 11 && currentEndgameRound < 2) {
		if (currentMission < 3) {
			currentScore += currentDifficulty;
			currentMission++;
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy + " Mission " + currentMission + " of 3";
		} else if (currentDifficulty == 10 && currentMission == 3) {
			currentMission = 1;
			currentScore += currentDifficulty;
			currentEndgameRound++;
			if (currentChaos) {
				currentEnemy = pickEnemy();
			}
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " (Round " + currentEndgameRound + ") " + currentEnemy + " Mission " + currentMission + " of 3";
		} else {
			currentScore += currentDifficulty;
			currentDifficulty++;
			if (currentChaos) {
				currentEnemy = pickEnemy();
			}
			currentMission = 1;
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " " + currentEnemy + " Mission " + currentMission + " of 3";
		}
	} else {
		if (currentMission < 3) {
			currentScore += currentDifficulty;
			currentScore += (currentEndgameRound - 1);
			currentMission++;
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " (Round " + currentEndgameRound + ") " + currentEnemy + " Mission " + currentMission + " of 3";
		} else {
			currentMission = 1;
			currentScore += currentDifficulty;
			currentScore += (currentEndgameRound - 1);
			currentEndgameRound++;
			if (currentChaos) {
				currentEnemy = pickEnemy();
			}
			document.getElementById('missionTracker').innerText = "Level " + currentDifficulty + " (Round " + currentEndgameRound + ") " + currentEnemy + " Mission " + currentMission + " of 3";
		}
	}
}

function selectBug() {
	var contents = document.querySelectorAll('.enemy-row');
	contents.forEach(content => content.style.display = 'none');
	currentEnemy = "Terminids";
	updateMission();
	generateLoadoutTable();
	
	contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	document.getElementById('topLoad').style.display = 'flex';
	document.getElementById('bottomLoad').style.display = 'flex';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'flex');
}

function selectBot() {
	var contents = document.querySelectorAll('.enemy-row');
	contents.forEach(content => content.style.display = 'none');
	currentEnemy = "Automatons";
	updateMission();
	generateLoadoutTable();
	
	contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	document.getElementById('topLoad').style.display = 'flex';
	document.getElementById('bottomLoad').style.display = 'flex';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'flex');
}

function selectSquid() {
	var contents = document.querySelectorAll('.enemy-row');
	contents.forEach(content => content.style.display = 'none');
	currentEnemy = "Illuminate";
	updateMission();
	generateLoadoutTable();
	
	contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	document.getElementById('topLoad').style.display = 'flex';
	document.getElementById('bottomLoad').style.display = 'flex';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'flex');
}

function selectChaos() {
	var contents = document.querySelectorAll('.enemy-row');
	contents.forEach(content => content.style.display = 'none');
	currentEnemy = pickEnemy();
	currentChaos = true;
	updateMission();
	generateLoadoutTable();
	
	contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	document.getElementById('topLoad').style.display = 'flex';
	document.getElementById('bottomLoad').style.display = 'flex';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'flex');
}

function notFullStar() {
	var contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'none';});
	document.getElementById('topLoad').style.display = 'none';
	document.getElementById('bottomLoad').style.display = 'none';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'none');
	updateMission();
	
	const container = document.getElementById('roll-results');
	container.innerHTML = '';
	container.appendChild(rollSelect(1));
	container.style.display = 'flex';
}

function fullStar() {
	var contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'none';});
	document.getElementById('topLoad').style.display = 'none';
	document.getElementById('bottomLoad').style.display = 'none';
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'none');
	updateMission();
	
	const container = document.getElementById('roll-results');
	container.innerHTML = '';
	container.appendChild(rollSelect(2));
	container.style.display = 'flex';
}

function finalResults() {
	var contents = document.querySelectorAll('.game-row');
	contents.forEach(function(button){button.style.display = 'none';});
	document.getElementById('topLoad').style.display = 'none';
	document.getElementById('bottomLoad').style.display = 'none';
	contents = document.querySelectorAll('.mission-row');
	contents.forEach(function(button){button.style.display = 'none';});
	contents = document.querySelectorAll('.save-button');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.results-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.getElementById('resultsPrint');
	contents.innerHTML = '';
	
	if (currentChaos) {
		currentEnemy = "Pandemonium";
	}
	var peak = "";
	if (currentDifficulty == 1) {
		peak = "Maybe you'd enjoy an easier game...";
	} else if (currentDifficulty == 2) {
		peak = "Level " + (currentDifficulty - 1);
	} else if (currentMission > 1) {
		peak = "Level " + currentDifficulty + ", Mission " + (currentMission - 1);
	} else if (currentMission == 1 && currentDifficulty == 10 && currentEndgameRound > 1) {
		peak = "Level " + currentDifficulty + ", Round " + (currentEndgameRound - 1) + ", Mission 3";
	} else if (currentDifficulty == 10 && currentEndgameRound > 1) {
		peak = "Level " + currentDifficulty + ", Round " + currentEndgameRound + ", Mission " + (currentMission - 1);
	} else if (currentMission == 1 && currentDifficulty > 5) {
		peak = "Level " + (currentDifficulty - 1) + ", Mission 3";
	} else if (currentMission == 1 && currentDifficulty <= 5) {
		peak = "Level " + (currentDifficulty - 1) + ", Mission 2";
	}
	
	resultsData = [
		["Enemy", currentEnemy],
		["Highest level complete", peak],
		["Final score", currentScore],
		["Friendly fire", "So much"]
	];
	
	savedRuns.splice(currentSaveIndex, 1); 
	localStorage.setItem('savedRunsLocal', JSON.stringify(savedRuns)); 
	currentSaveIndex = savedRuns.length;
	
	createResultTable(resultsData, 'resultsPrint');
	document.getElementById('goAgain').innerText = "GG, Helldiver! Ready for new orders?";
	contents = document.querySelectorAll('.game-button');
	contents.forEach(content => content.style.display = 'flex');
	contents = document.querySelectorAll('.continue-button');
	contents.forEach(content => content.style.display = 'flex');
}

function resumeGame() {
	var contents = document.querySelectorAll('.continue-button');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.results-row');
	contents.forEach(content => content.style.display = 'none');
	contents = document.querySelectorAll('.continue-row');
	contents.forEach(function(button){button.style.display = 'flex';});
	contents = document.getElementById('runsPrint');
	contents.innerHTML = '';
	
	if (savedRuns.length > 0) {
		document.getElementById('saves').style.display = 'flex';
		document.getElementById('noSaves').style.display = 'none';
		createRunsTable(savedRuns, 'runsPrint');
	} else {
		document.getElementById('saves').style.display = 'none';
		document.getElementById('noSaves').style.display = 'flex';
	}
}

function openTab(tabName) {
	// Hide all tab content
	const contents = document.querySelectorAll('.tab-content');
	contents.forEach(content => content.style.display = 'none');

	// Show the clicked tab content
	const activeTab = document.getElementById(tabName);
	activeTab.style.display = 'block';
}

function openTabGame(tabName) {
	// Hide all tab content
	var contents = document.querySelectorAll('.tab-content');
	contents.forEach(content => content.style.display = 'none');
	contents = document.getElementById('myArmoury');
	contents.style.display = 'none';

	// Show the clicked tab content
	const activeTab = document.getElementById(tabName);
	activeTab.style.display = 'block';
}

function armouryButtons() {
	var contents = document.querySelectorAll('.tab-content');
	contents.forEach(content => content.style.display = 'none');
	contents = document.getElementById('myArmoury');
	contents.style.display = 'flex';
}

function selectAll(category) {
	if (category != 3 || category != 4) {
		for (var x = 0; x < userMaster[category].length; x++) {
			userMaster[category][x][2] = true;
		}
	} else { 
		for (var x = 0; x < (userMaster[category].length - 1); x++) {
			userMaster[category][x][2] = true;
		}
	}

	localStorage.setItem('userMasterLocal', JSON.stringify(userMaster));
	
	var container = document.getElementById('table-primary');
	container.innerHTML = '';
	container = document.getElementById('table-side');
	container.innerHTML = '';
	container = document.getElementById('table-throw');
	container.innerHTML = '';
	container = document.getElementById('table-strat');
	container.innerHTML = '';
	container = document.getElementById('table-boost');
	container.innerHTML = '';
	container = document.getElementById('table-armour');
	container.innerHTML = '';

	createTable(userMaster[0], 'table-primary', true);
	createTable(userMaster[1], 'table-side', true);
	createTable(userMaster[2], 'table-throw', true);
	createTable(userMaster[3], 'table-strat', false);
	createTable(userMaster[4], 'table-boost', false);
	createTable(userMaster[5], 'table-armour', true);
}

function clearAll(category) {
	for (var x = 0; x < userMaster[category].length; x++) {
		if (countTrues(category)) {
				userMaster[category][x][2] = true;
		} else {
			userMaster[category][x][2] = false;
		}
	}

	localStorage.setItem('userMasterLocal', JSON.stringify(userMaster));
	
	var container = document.getElementById('table-primary');
	container.innerHTML = '';
	container = document.getElementById('table-side');
	container.innerHTML = '';
	container = document.getElementById('table-throw');
	container.innerHTML = '';
	container = document.getElementById('table-strat');
	container.innerHTML = '';
	container = document.getElementById('table-boost');
	container.innerHTML = '';
	container = document.getElementById('table-armour');
	container.innerHTML = '';

	createTable(userMaster[0], 'table-primary', true);
	createTable(userMaster[1], 'table-side', true);
	createTable(userMaster[2], 'table-throw', true);
	createTable(userMaster[3], 'table-strat', false);
	createTable(userMaster[4], 'table-boost', false);
	createTable(userMaster[5], 'table-armour', true);
}

if (window.matchMedia("(orientation: landscape)").matches) {
	var container = document.getElementById('table-primary');
	container.innerHTML = '';
	container = document.getElementById('table-side');
	container.innerHTML = '';
	container = document.getElementById('table-throw');
	container.innerHTML = '';
	container = document.getElementById('table-strat');
	container.innerHTML = '';
	container = document.getElementById('table-boost');
	container.innerHTML = '';
	container = document.getElementById('table-armour');
	container.innerHTML = '';
	columnCount = landscapeColumns;
	createTable(userMaster[0], 'table-primary', true);
	createTable(userMaster[1], 'table-side', true);
	createTable(userMaster[2], 'table-throw', true);
	createTable(userMaster[3], 'table-strat', false);
	createTable(userMaster[4], 'table-boost', false);
	createTable(userMaster[5], 'table-armour', true);
} else {
	var container = document.getElementById('table-primary');
	container.innerHTML = '';
	container = document.getElementById('table-side');
	container.innerHTML = '';
	container = document.getElementById('table-throw');
	container.innerHTML = '';
	container = document.getElementById('table-strat');
	container.innerHTML = '';
	container = document.getElementById('table-boost');
	container.innerHTML = '';
	container = document.getElementById('table-armour');
	container.innerHTML = '';
	columnCount = portraitColumns;
	createTable(userMaster[0], 'table-primary', true);
	createTable(userMaster[1], 'table-side', true);
	createTable(userMaster[2], 'table-throw', true);
	createTable(userMaster[3], 'table-strat', false);
	createTable(userMaster[4], 'table-boost', false);
	createTable(userMaster[5], 'table-armour', true);
}

window.addEventListener('resize', function() {
	var container = document.getElementById('table-primary');
	container.innerHTML = '';
	container = document.getElementById('table-side');
	container.innerHTML = '';
	container = document.getElementById('table-throw');
	container.innerHTML = '';
	container = document.getElementById('table-strat');
	container.innerHTML = '';
	container = document.getElementById('table-boost');
	container.innerHTML = '';
	container = document.getElementById('table-armour');
	container.innerHTML = '';
	if (window.matchMedia("(orientation: landscape)").matches) {
		columnCount = landscapeColumns;
		createTable(userMaster[0], 'table-primary', true);
		createTable(userMaster[1], 'table-side', true);
		createTable(userMaster[2], 'table-throw', true);
		createTable(userMaster[3], 'table-strat', false);
		createTable(userMaster[4], 'table-boost', false);
		createTable(userMaster[5], 'table-armour', true);
	} else {
		columnCount = portraitColumns;
		createTable(userMaster[0], 'table-primary', true);
		createTable(userMaster[1], 'table-side', true);
		createTable(userMaster[2], 'table-throw', true);
		createTable(userMaster[3], 'table-strat', false);
		createTable(userMaster[4], 'table-boost', false);
		createTable(userMaster[5], 'table-armour', true);
	}
});
