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
		["TED-63 Dynamite", "./images/Throw/TED-63_Dynamite_Throwable_Weaponry.png", true],
		["G-6 Frag", "./images/Throw/G-6_Frag_Throwable_Weaponry.png", true],
		["G-12 High Explosive", "./images/Throw/G-12_High_Explosive_Throwable_Weaponry.png", true],
		["G-10 Incendiary", "./images/Throw/G-10_Incendiary_Throwable_Weaponry.png", true],
		["G-16 Impact", "./images/Throw/G-16_Impact_Throwable_Weaponry.png", true],
		["G-13 Incendiary Impact", "./images/Throw/G-13_Incendiary_Impact_Throwable_Weaponry.png", true],
		["G-23 Stun", "./images/Throw/G-23_Stun_Throwable_Weaponry.png", true],
		["G-4 Gas", "./images/Throw/G-4_Gas_Throwable_Weaponry.png", true],
		["G-50 Seeker", "./images/Throw/G-50_Seeker_Throwable_Weaponry.png", true],
		["G-3 Smoke", "./images/Throw/G-3_Smoke_Throwable_Weaponry.png", true],
		["G-123 Thermite", "./images/Throw/G-123_Thermite_Throwable_Weaponry.png", true],
		["K-2 Throwing Knife", "./images/Throw/K-2_Throwing_Knife_Throwable_Weaponry.png", true]
	],[
	// 3 = Strategems
		["Orbital Precision Strike", "./images/Strat/Orbital_Precision_Strike_Stratagem_Icon.png", true],
		["Orbital Gatling Barrage", "./images/Strat/Orbital_Gatling_Barrage_Stratagem_Icon.png", true],
		["Orbital Airburst Strike", "./images/Strat/Orbital_Airburst_Strike_Stratagem_Icon.png", true],
		["Orbital Napalm Barrage", "./images/Strat/Orbital_Napalm_Barrage_Stratagem_Icon.png", true],
		["Orbital 120mm HE Barrage", "./images/Strat/Orbital_120mm_HE_Barrage_Stratagem_Icon.png", true],
		["Orbital Walking Barrage", "./images/Strat/Orbital_Walking_Barrage_Stratagem_Icon.png", true],
		["Orbital 380mm HE Barrage", "./images/Strat/Orbital_380mm_HE_Barrage_Stratagem_Icon.png", true],
		["Orbital Railcannon Strike", "./images/Strat/Orbital_Railcannon_Strike_Stratagem_Icon.png", true],
		["Orbital Laser", "./images/Strat/Orbital_Laser_Stratagem_Icon.png", true],
		["Orbital EMS Strike", "./images/Strat/Orbital_EMS_Strike_Stratagem_Icon.png", true],
		["Orbital Gas Strike", "./images/Strat/Orbital_Gas_Strike_Stratagem_Icon.png", true],
		["Orbital Smoke Strike", "./images/Strat/Orbital_Smoke_Strike_Stratagem_Icon.png", true],
		["Eagle 500kg Bomb", "./images/Strat/Eagle_500kg_Bomb_Stratagem_Icon.png", true],
		["Eagle Strafing Run", "./images/Strat/Eagle_Strafing_Run_Stratagem_Icon.png", true],
		["Eagle 110mm Rocket Pods", "./images/Strat/Eagle_110mm_Rocket_Pods_Stratagem_Icon.png", true],
		["Eagle Airstrike", "./images/Strat/Eagle_Airstrike_Stratagem_Icon.png", true],
		["Eagle Cluster Bomb", "./images/Strat/Eagle_Cluster_Bomb_Stratagem_Icon.png", true],
		["Eagle Napalm Airstrike", "./images/Strat/Eagle_Napalm_Airstrike_Stratagem_Icon.png", true],
		["Eagle Smoke Strike", "./images/Strat/Eagle_Smoke_Strike_Stratagem_Icon.png", true],
		["MG-43 Machine Gun", "./images/Strat/Machine_Gun_Stratagem_Icon.png", true],
		["M-105 Stalwart", "./images/Strat/Stalwart_Stratagem_Icon.png", true],
		["MG-206 Heavy Machine Gun", "./images/Strat/Heavy_Machine_Gun_Stratagem_Icon.png", true],
		["RS-422 Railgun", "./images/Strat/Railgun_Stratagem_Icon.png", true],
		["APW-1 Anti-Materiel Rifle", "./images/Strat/Anti-Materiel_Rifle_Stratagem_Icon.png", true],
		["GL-21 Grenade Launcher", "./images/Strat/Grenade_Launcher_Stratagem_Icon.png", true],
		["TX-41 Sterilizer", "./images/Strat/Sterilizer_Stratagem_Icon.png", true],
		["FLAM-40 Flamethrower", "./images/Strat/Flamethrower_Stratagem_Icon.png", true],
		["LAS-98 Laser Cannon", "./images/Strat/Laser_Cannon_Stratagem_Icon.png", true],
		["LAS-99 Quasar Cannon", "./images/Strat/Quasar_Cannon_Stratagem_Icon.png", true],
		["ARC-3 Arc Thrower", "./images/Strat/Arc_Thrower_Stratagem_Icon.png", true],
		["MLS-4X Commando", "./images/Strat/Commando_Stratagem_Icon.png", true],
		["EAT-17 Expendable Anti-Tank", "./images/Strat/Expendable_Anti-Tank_Stratagem_Icon.png", true], // left off
		["AC-8 Autocannon", "./images/Strat/Autocannon_Stratagem_Icon.png", true],
		["RL-77 Airburst Rocket Launcher", "./images/Strat/RL-77_Airburst_Rocket_Launcher_Stratagem_Icon.png", true],
		["FAF-14 Spear", "./images/Strat/Spear_Stratagem_Icon.png", true],
		["StA-X3 W.A.S.P. Launcher", "./images/Strat/StA-X3_W.A.S.P._Launcher_Stratagem_Icon.png", true],
		["GR-8 Recoilless Rifle", "./images/Strat/Recoilless_Rifle_Stratagem_Icon.png", true],
		["SH-32 Shield Generator Pack", "./images/Strat/Shield_Generator_Pack_Stratagem_Icon.png", true],
		["SH-51 Directional Shield", "./images/Strat/SH-51_Directional_Shield_Stratagem_Icon.png", true],
		["SH-20 Ballistic Shield Backpack", "./images/Strat/Ballistic_Shield_Backpack_Stratagem_Icon.png", true],
		["LIFT-860 Hover Pack", "./images/Strat/Hover_Pack_Stratagem_Icon.png", true],
		["B-1 Supply Pack", "./images/Strat/Supply_Pack_Stratagem_Icon.png", true],
		["B-100 Portable Hellbomb", "./images/Strat/Portable_Hellbomb_Stratagem_Icon.png", true],
		["LIFT-850 Jump Pack", "./images/Strat/Jump_Pack_Stratagem_Icon.png", true],
		["AX/AR-23 \"Guard Dog\"", "./images/Strat/Guard_Dog_Stratagem_Icon.png", true],
		["AX/LAS-5 \"Guard Dog\" Rover", "./images/Strat/Guard_Dog_Rover_Stratagem_Icon.png", true],
		["AX/TX-13 \"Guard Dog\" Dog Breath", "./images/Strat/Guard_Dog_Dog_Breath_Stratagem_Icon.png", true],
		["M-102 Fast Reconnaissance Vehicle", "./images/Strat/M-102_Fast_Recon_Vehicle_Stratagem_Icon.png", true],
		["EXO-49 Emancipator Exosuit", "./images/Strat/EXO-49_Emancipator_Exosuit_Stratagem_Icon.png", true],
		["EXO-45 Patriot Exosuit", "./images/Strat/EXO-45_Patriot_Exosuit_Stratagem_Icon.png", true],
		["A/G-16 Gatling Sentry", "./images/Strat/Gatling_Sentry_Stratagem_Icon.png", true],
		["A/MG-43 Machine Gun Sentry", "./images/Strat/Machine_Gun_Sentry_Stratagem_Icon.png", true],
		["A/FLAM-40 Flame Sentry", "./images/Strat/A_FLAM-40_Flame_Sentry_Stratagem_Icon.png", true],
		["A/MLS-4X Rocket Sentry", "./images/Strat/Rocket_Sentry_Stratagem_Icon.png", true],
		["A/AC-8 Autocannon Sentry", "./images/Strat/Autocannon_Sentry_Stratagem_Icon.png", true],
		["A/M-23 EMS Mortar Sentry", "./images/Strat/AM-23_EMS_Mortar_Sentry_Stratagem_Icon.png", true],
		["A/M-12 Mortar Sentry", "./images/Strat/Mortar_Sentry_Stratagem_Icon.png", true],
		["FX-12 Shield Generator Relay", "./images/Strat/Shield_Generator_Relay_Stratagem_Icon.png", true],
		["E/GL-21 Grenadier Battlement", "./images/Strat/GL-21_Grenadier_Battlement_Stratagem_Icon.png", true],
		["E/AT-12 Anti-Tank Emplacement", "./images/Strat/E_AT-12_Anti-Tank_Emplacement_Stratagem_Icon.png", true],
		["E/MG-101 HMG Emplacement", "./images/Strat/HMG_Emplacement_Stratagem_Icon.png", true],
		["A/ARC-3 Tesla Tower", "./images/Strat/Tesla_Tower_Stratagem_Icon.png", true],
		["MD-17 Anti-Tank Mines", "./images/Strat/MD-17_Anti-Tank_Mines_Stratagem_Icon.png", true],
		["MD-8 Gas Mines", "./images/Strat/Gas_Minefield_Stratagem_Icon.png", true],
		["MD-6 Anti-Personnel Minefield", "./images/Strat/Anti-Personnel_Minefield_Stratagem_Icon.png", true],
		["MD-I4 Incendiary Mines", "./images/Strat/Incendiary_Mines_Stratagem_Icon.png", true],
		["Empty slot", skull, false]
	],[
	// 4 = Boosters
		["Vitality Enhancement", "./images/Boost/Vitality_Enhancement_Booster_Icon.svg", true],
		["Stamina Enhancement", "./images/Boost/Stamina_Enhancement_Booster_Icon.svg", true],
		["Muscle Enhancement", "./images/Boost/Muscle_Enhancement_Booster_Icon.svg", true],
		["UAV Recon Booster", "./images/Boost/UAV_Recon_Booster_Booster_Icon.svg", true],
		["Increased Reinforcement Budget", "./images/Boost/Increased_Reinforcement_Budget_Booster_Icon.svg", true],
		["Flexible Reinforcement Budget", "./images/Boost/Flexible_Reinforcement_Budget_Booster_Icon.svg", true],
		["Hellpod Space Optimization", "./images/Boost/Hellpod_Space_Optimization_Booster_Icon.svg", true],
		["Localization Confusion", "./images/Boost/Localization_Confusion_Booster_Icon.svg", true],
		["Expert Extraction Pilot", "./images/Boost/Expert_Extraction_Pilot_Booster_Icon.svg", true],
		["Motivational Shocks", "./images/Boost/Motivational_Shocks_Booster_Icon.svg", true],
		["Experimental Infusion", "./images/Boost/Experimental_Infusion_Booster_Icon.svg", true],
		["Firebomb Hellpods", "./images/Boost/Firebomb_Hellpods_Booster_Icon.svg", true],
		["Dead Sprint", "./images/Boost/Dead_Sprint_Booster_Icon.svg", true],
		["Armed Resupply Pods", "./images/Boost/Armed_Resupply_Pods_Booster_Icon.svg", true],
		["Sample Extricator", "./images/Boost/Sample_Extricator_Booster_Icon.png", true],
		["No booster", skull, false]
	],[
	// 5 = Armours
		["FS-37 Ravager", "./images/Armour/FS-37_Ravager_Body_Armory.png", true],
		["CW-4 Arctic Ranger", "./images/Armour/CW-4_Arctic_Ranger_Body_Armory.png", true],
		["CE-74 Breaker", "./images/Armour/CE-74_Breaker_Body_Armory.png", true],
		["CE-67 Titan", "./images/Armour/CE-67_Titan_Body_Armory.png", true],
		["CM-21 Trench Paramedic", "./images/Armour/CM-21_Trench_Paramedic_Body_Armory.png", true],
		["CE-07 Demolition Specialist", "./images/Armour/CE-07_Demolition_Specialist_Body_Armory.png", true],
		["FS-38 Eradicator", "./images/Armour/FS-38_Eradicator_Body_Armory.png", true],
		["EX-00 Prototype X", "./images/Armour/EX-00_Prototype_X_Body_Armory.png", true],
		["SC-37 Legionnaire", "./images/Armour/SC-37_Legionnaire_Body_Armory.png", true],
		["B-08 Light Gunner", "./images/Armour/B-08_Light_Gunner_Body_Armory.png", true],
		["SC-30 Trailblazer Scout", "./images/Armour/SC-30_Trailblazer_Scout_Body_Armory.png", true],
		["SC-34 Infiltrator", "./images/Armour/SC-34_Infiltrator_Body_Armory.png", true],
		["IE-57 Hell-Bent", "./images/Armour/IE-57_Hell-Bent_Body_Armory.png", true],
		["GS-11 Democracy's Deputy", "./images/Armour/300px-GS-11_Democracy's_Deputy_Body_Armory.png", true],
		["AF-50 Noxious Ranger", "./images/Armour/AF-50_Noxious_Ranger_Body_Armory.png", true],
		["UF-16 Inspector", "./images/Armour/UF-16_Inspector_Body_Armory.png", true],
		["SR-24 Street Scout", "./images/Armour/SR-24_Street_Scout_Body_Armory.png", true],
		["PH-9 Predator", "./images/Armour/PH-9_Predator_Body_Armory.png", true],
		["I-09 Heatseeker", "./images/Armour/I-09_Heatseeker_Body_Armory.png", true],
		["AC-2 Obedient", "./images/Armour/AC-2_Obedient_Body_Armory.png", true],
		["SA-25 Steel Trooper", "./images/Armour/SA-25_Steel_Trooper_Body_Armory.png", true],
		["SA-12 Servo Assisted", "./images/Armour/SA-12_Servo_Assisted_Body_Armory.png", true],
		["DP-00 Tactical", "./images/Armour/DP-00_Tactical_Body_Armory.png", true],
		["CE-35 Trench Engineer", "./images/Armour/CE-35_Trench_Engineer_Body_Armory.png", true],
		["CE-27 Ground Breaker", "./images/Armour/CE-27_Ground_Breaker_Body_Armory.png", true],
		["CM-09 Bonesnapper", "./images/Armour/CM-09_Bonesnapper_Body_Armory.png", true],
		["CM-10 Clinician", "./images/Armour/CM-10_Clinician_Body_Armory.png", true],
		["B-22 Model Citizen", "./images/Armour/B-22_Model_Citizen_Body_Armory.png", true],
		["SC-15 Drone Master", "./images/Armour/SC-15_Drone_Master_Body_Armory.png", true],
		["EX-03 Prototype 3", "./images/Armour/EX-03_Prototype_3_Body_Armory.png", true],
		["EX-16 Prototype 16", "./images/Armour/EX-16_Prototype_16_Body_Armory.png", true],
		["FS-34 Exterminator", "./images/Armour/FS-34_Exterminator_Body_Armory.png", true],
		["DP-40 Hero of the Federation", "./images/Armour/DP-40_Hero_of_the_Federation_Body_Armory.png", true],
		["TR-9 Cavalier of Democracy", "./images/Armour/TR-9_Cavalier_of_Democracy_Body_Armory.png", true],
		["DP-11 Champion of the People", "./images/Armour/DP-11_Champion_of_the_People_Body_Armory.png", true],
		["CM-14 Physician", "./images/Armour/CM-14_Physician_Body_Armory.png", true],
		["TR-117 Alpha Commander", "./images/Armour/TR-117_Alpha_Commander_Body_Armory.png", true],
		["CE-81 Juggernaut", "./images/Armour/CE-81_Juggernaut_Body_Armory.png", true],
		["DP-53 Savior of the Free", "./images/Armour/DP-53_Savior_of_the_Free_Body_Armory.png", true],
		["B-24 Enforcer", "./images/Armour/B-24_Enforcer_Body_Armory.png", true],
		["TR-7 Ambassador of the Brand", "./images/Armour/TR-7_Ambassador_of_the_Brand_Body_Armory.png", true],
		["B-01 Tactical", "./images/Armour/B-01_Tactical_Body_Armory.png", true],
		// ["B-01 Tactical (2)", "./images/Armour/B-01_Tactical_Body_Armory_2.png", true],
		// ["B-01 Tactical (3)", "./images/Armour/B-01_Tactical_Body_Armory_3.png", true],
		// ["B-01 Tactical (4)", "./images/Armour/B-01_Tactical_Body_Armory_4.png", true],
		["TR-40 Gold Eagle", "./images/Armour/TR-40_Gold_Eagle_Body_Armory.png", true],
		["AF-91 Field Chemist", "./images/Armour/AF-91_Field_Chemist_Body_Armory.png", true],
		["UF-84 Doubt Killer", "./images/Armour/UF-84_Doubt_Killer_Body_Armory.png", true],
		["CW-9 White Wolf", "./images/Armour/CW-9_White_Wolf_Body_Armory.png", true],
		["PH-56 Jaguar", "./images/Armour/PH-56_Jaguar_Body_Armory.png", true],
		["I-92 Fire Fighter", "./images/Armour/I-92_Fire_Fighter_Body_Armory.png", true],
		["SA-04 Combat Technician", "./images/Armour/SA-04_Combat_Technician_Body_Armory.png", true],
		["AF-02 Haz-Master", "./images/Armour/AF-02_Haz-Master_Body_Armory.png", true],
		["UF-50 Bloodhound", "./images/Armour/UF-50_Bloodhound_Body_Armory.png", true],
		["IE-3 Martyr", "./images/Armour/IE-3_Martyr_Body_Armory.png", true],
		["IE-12 Righteous", "./images/Armour/IE-12_Righteous_Body_Armory.png", true],
		["GS-17 Frontier Marshall", "./images/Armour/GS-17_Frontier_Marshal_Body_Armory.png", true],
		["I-102 Draconaught", "./images/Armour/I-102_Draconaught_Body_Armory.png", true],
		["AC-1 Dutiful", "./images/Armour/AC-1_Dutiful_Body_Armory.png", true],
		["FS-55 Devastator", "./images/Armour/FS-55_Devastator_Body_Armory.png", true],
		["CW-22 Kodiak", "./images/Armour/CW-22_Kodiak_Body_Armory.png", true],
		["SA-32 Dynamo", "./images/Armour/SA-32_Dynamo_Body_Armory.png", true],
		["CM-17 Butcher", "./images/Armour/CM-17_Butcher_Body_Armory.png", true],
		["FS-61 Dreadnought", "./images/Armour/FS-61_Dreadnought_Body_Armory.png", true],
		["B-27 Fortified Commando", "./images/Armour/B-27_Fortified_Commando_Body_Armory.png", true],
		["FS-05 Marksman", "./images/Armour/FS-05_Marksman_Body_Armory.png", true],
		["FS-11 Executioner", "./images/Armour/FS-11_Executioner_Body_Armory.png", true],
		["AF-52 Lockdown", "./images/Armour/AF-52_Lockdown_Body_Armory.png", true],
		["SR-64 Cinderblock", "./images/Armour/SR-64_Cinderblock_Body_Armory.png", true],
		["CE-64 Grenadier", "./images/Armour/CE-64_Grenadier_Body_Armory.png", true],
		["CE-101 Guerilla Gorilla", "./images/Armour/CE-101_Guerilla_Gorilla_Body_Armory.png", true],
		["I-44 Salamander", "./images/Armour/I-44_Salamander_Body_Armory.png", true],
		["SR-18 Roadblock", "./images/Armour/SR-18_Roadblock_Body_Armory.png", true],
		["GS-66 Lawmaker", "./images/Armour/GS-66_Lawmaker_Body_Armory.png", true],
		["PH-202 Twigsnapper", "./images/Armour/PH-202_Twigsnapper_Body_Armory.png", true],
		["FS-23 Battle Master", "./images/Armour/FS-23_Battle_Master_Body_Armory.png", true],
		["CW-36 Winter Warrior", "./images/Armour/CW-36_Winter_Warrior_Body_Armory.png", true],
		["TR-62 Knight", "./images/Armour/TR-62_Knight_Body_Armory.png", true]
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
