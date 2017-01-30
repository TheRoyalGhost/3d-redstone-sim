const itemData = [
{texture: 1, name: "1 Stone"},
{texture: 2, name: "1:1 Granite"},
{texture: 3, name: "1:2 Polished Granite"},
{texture: 4, name: "1:3 Diorite"},
{texture: 5, name: "1:4 Polished Diorite"},
{texture: 6, name: "1:5 Andesite"},
{texture: 7, name: "1:6 Polished Andesite"},
{texture: 195, name: "2 Grass"},
{texture: 301, name: "3 Dirt"},
{texture: 302, name: "3:1 Coarse Dirt"},
{texture: 303, name: "3:2 Podzol"},
{texture: 504, name: "4 Cobblestone"},
{texture: 580, name: "5 Oak Wood Plank"},
{texture: 581, name: "5:1 Spruce Wood Plank"},
{texture: 582, name: "5:2 Birch Wood Plank"},
{texture: 583, name: "5:3 Jungle Wood Plank"},
{texture: 584, name: "5:4 Acacia Wood Plank"},
{texture: 585, name: "5:5 Dark Oak Wood Plank"},
{texture: 596, name: "6 Oak Sapling"},
{texture: 597, name: "6:1 Spruce Sapling"},
{texture: 598, name: "6:2 Birch Sapling"},
{texture: 599, name: "6:3 Jungle Sapling"},
{texture: 600, name: "6:4 Acacia Sapling"},
{texture: 601, name: "6:5 Dark Oak Sapling"},
{texture: 612, name: "7 Bedrock"},
{texture: 623, name: "8 Flowing Water"},
{texture: 634, name: "9 Still Water"},
{texture: 8, name: "10 Flowing Lava"},
{texture: 19, name: "11 Still Lava"},
{texture: 30, name: "12 Sand"},
{texture: 31, name: "12:1 Red Sand"},
{texture: 52, name: "13 Gravel"},
{texture: 64, name: "14 Gold Ore"},
{texture: 75, name: "15 Iron Ore"},
{texture: 103, name: "16 Coal Ore"},
{texture: 133, name: "17 Oak Wood"},
{texture: 134, name: "17:1 Spruce Wood"},
{texture: 135, name: "17:2 Birch Wood"},
{texture: 136, name: "17:3 Jungle Wood"},
{texture: 169, name: "18 Oak Leaves"},
{texture: 170, name: "18:1 Spruce Leaves"},
{texture: 171, name: "18:2 Birch Leaves"},
{texture: 172, name: "18:3 Jungle Leaves"},
{texture: 183, name: "19 Sponge"},
{texture: 184, name: "19:1 Wet Sponge"},
{texture: 196, name: "20 Glass"},
{texture: 207, name: "21 Lapis Lazuli Ore"},
{texture: 218, name: "22 Lapis Lazuli Block"},
{texture: 241, name: "23 Dispenser"},
{texture: 247, name: "24 Sandstone"},
{texture: 248, name: "24:1 Chiseled Sandstone"},
{texture: 249, name: "24:2 Smooth Sandstone"},
{texture: 250, name: "25 Note Block"},
{texture: 256, name: "26 Bed"},
{texture: 268, name: "27 Powered Rail"},
{texture: 279, name: "28 Detector Rail"},
{texture: 290, name: "29 Sticky Piston"},
{texture: 304, name: "30 Cobweb"},
{texture: 315, name: "31 Dead Shrub"},
{texture: 316, name: "31:1 Grass"},
{texture: 317, name: "31:2 Fern"},
{texture: 328, name: "32 Dead Bush"},
{texture: 340, name: "33 Piston"},
{texture: 351, name: "34 Piston Head"},
{texture: 365, name: "35 White Wool"},
{texture: 366, name: "35:1 Orange Wool"},
{texture: 373, name: "35:2 Magenta Wool"},
{texture: 374, name: "35:3 Light Blue Wool"},
{texture: 375, name: "35:4 Yellow Wool"},
{texture: 376, name: "35:5 Lime Wool"},
{texture: 377, name: "35:6 Pink Wool"},
{texture: 378, name: "35:7 Gray Wool"},
{texture: 379, name: "35:8 Light Gray Wool"},
{texture: 380, name: "35:9 Cyan Wool"},
{texture: 367, name: "35:10 Purple Wool"},
{texture: 368, name: "35:11 Blue Wool"},
{texture: 369, name: "35:12 Brown Wool"},
{texture: 370, name: "35:13 Green Wool"},
{texture: 371, name: "35:14 Red Wool"},
{texture: 372, name: "35:15 Black Wool"},
{texture: 417, name: "37 Dandelion"},
{texture: 428, name: "38 Poppy"},
{texture: 429, name: "38:1 Blue Orchid"},
{texture: 430, name: "38:2 Allium"},
{texture: 431, name: "38:3 Azure Bluet"},
{texture: 432, name: "38:4 Red Tulip"},
{texture: 433, name: "38:5 Orange Tulip"},
{texture: 434, name: "38:6 White Tulip"},
{texture: 435, name: "38:7 Pink Tulip"},
{texture: 436, name: "38:8 Oxeye Daisy"},
{texture: 488, name: "39 Brown Mushroom"},
{texture: 505, name: "40 Red Mushroom"},
{texture: 516, name: "41 Gold Block"},
{texture: 527, name: "42 Iron Block"},
{texture: 537, name: "43 Double Stone Slab"},
{texture: 538, name: "43:1 Double Sandstone Slab"},
{texture: 539, name: "43:2 Double Wooden Slab"},
{texture: 540, name: "43:3 Double Cobblestone Slab"},
{texture: 541, name: "43:4 Double Brick Slab"},
{texture: 542, name: "43:5 Double Stone Brick Slab"},
{texture: 543, name: "43:6 Double Nether Brick Slab"},
{texture: 544, name: "43:7 Double Quartz Slab"},
{texture: 555, name: "44 Stone Slab"},
{texture: 556, name: "44:1 Sandstone Slab"},
{texture: 557, name: "44:2 Wooden Slab"},
{texture: 558, name: "44:3 Cobblestone Slab"},
{texture: 559, name: "44:4 Brick Slab"},
{texture: 560, name: "44:5 Stone Brick Slab"},
{texture: 561, name: "44:6 Nether Brick Slab"},
{texture: 562, name: "44:7 Quartz Slab"},
{texture: 573, name: "45 Bricks"},
{texture: 576, name: "46 TNT"},
{texture: 577, name: "47 Bookshelf"},
{texture: 578, name: "48 Moss Stone"},
{texture: 579, name: "49 Obsidian"},
{texture: 586, name: "50 Torch"},
{texture: 587, name: "51 Fire"},
{texture: 588, name: "52 Monster Spawner"},
{texture: 589, name: "53 Oak Wood Stairs"},
{texture: 590, name: "54 Chest"},
{texture: 591, name: "55 Redstone Wire"},
{texture: 592, name: "56 Diamond Ore"},
{texture: 593, name: "57 Diamond Block"},
{texture: 594, name: "58 Crafting Table"},
{texture: 595, name: "59 Wheat Crops"},
{texture: 602, name: "60 Farmland"},
{texture: 603, name: "61 Furnace"},
{texture: 604, name: "62 Burning Furnace"},
{texture: 605, name: "63 Standing Sign Block"},
{texture: 606, name: "64 Oak Door Block"},
{texture: 607, name: "65 Ladder"},
{texture: 608, name: "66 Rail"},
{texture: 609, name: "67 Cobblestone Stairs"},
{texture: 610, name: "68 Wall-mounted Sign Block"},
{texture: 611, name: "69 Lever"},
{texture: 613, name: "70 Stone Pressure Plate"},
{texture: 614, name: "71 Iron Door Block"},
{texture: 615, name: "72 Wooden Pressure Plate"},
{texture: 616, name: "73 Redstone Ore"},
{texture: 617, name: "74 Glowing Redstone Ore"},
{texture: 618, name: "75 Redstone Torch (off)"},
{texture: 619, name: "76 Redstone Torch (on)"},
{texture: 620, name: "77 Stone Button"},
{texture: 621, name: "78 Snow"},
{texture: 622, name: "79 Ice"},
{texture: 624, name: "80 Snow Block"},
{texture: 625, name: "81 Cactus"},
{texture: 626, name: "82 Clay"},
{texture: 627, name: "83 Sugar Canes"},
{texture: 628, name: "84 Jukebox"},
{texture: 629, name: "85 Oak Fence"},
{texture: 630, name: "86 Pumpkin"},
{texture: 631, name: "87 Netherrack"},
{texture: 632, name: "88 Soul Sand"},
{texture: 633, name: "89 Glowstone"},
{texture: 635, name: "90 Nether Portal"},
{texture: 636, name: "91 Jack o'Lantern"},
{texture: 637, name: "92 Cake Block"},
{texture: 638, name: "93 Redstone Repeater Block (off)"},
{texture: 639, name: "94 Redstone Repeater Block (on)"},
{texture: 640, name: "95 White Stained Glass"},
{texture: 641, name: "95:1 Orange Stained Glass"},
{texture: 648, name: "95:2 Magenta Stained Glass"},
{texture: 649, name: "95:3 Light Blue Stained Glass"},
{texture: 650, name: "95:4 Yellow Stained Glass"},
{texture: 651, name: "95:5 Lime Stained Glass"},
{texture: 652, name: "95:6 Pink Stained Glass"},
{texture: 653, name: "95:7 Gray Stained Glass"},
{texture: 654, name: "95:8 Light Gray Stained Glass"},
{texture: 655, name: "95:9 Cyan Stained Glass"},
{texture: 642, name: "95:10 Purple Stained Glass"},
{texture: 643, name: "95:11 Blue Stained Glass"},
{texture: 644, name: "95:12 Brown Stained Glass"},
{texture: 645, name: "95:13 Green Stained Glass"},
{texture: 646, name: "95:14 Red Stained Glass"},
{texture: 647, name: "95:15 Black Stained Glass"},
{texture: 656, name: "96 Wooden Trapdoor"},
{texture: 657, name: "97 Stone Monster Egg"},
{texture: 658, name: "97:1 Cobblestone Monster Egg"},
{texture: 659, name: "97:2 Stone Brick Monster Egg"},
{texture: 660, name: "97:3 Mossy Stone Brick Monster Egg"},
{texture: 661, name: "97:4 Cracked Stone Brick Monster Egg"},
{texture: 662, name: "97:5 Chiseled Stone Brick Monster Egg"},
{texture: 663, name: "98 Stone Bricks"},
{texture: 664, name: "98:1 Mossy Stone Bricks"},
{texture: 665, name: "98:2 Cracked Stone Bricks"},
{texture: 666, name: "98:3 Chiseled Stone Bricks"},
{texture: 667, name: "99 Brown Mushroom Block"},
{texture: 9, name: "100 Red Mushroom Block"},
{texture: 10, name: "101 Iron Bars"},
{texture: 11, name: "102 Glass Pane"},
{texture: 12, name: "103 Melon Block"},
{texture: 13, name: "104 Pumpkin Stem"},
{texture: 14, name: "105 Melon Stem"},
{texture: 15, name: "106 Vines"},
{texture: 16, name: "107 Oak Fence Gate"},
{texture: 17, name: "108 Brick Stairs"},
{texture: 18, name: "109 Stone Brick Stairs"},
{texture: 20, name: "110 Mycelium"},
{texture: 21, name: "111 Lily Pad"},
{texture: 22, name: "112 Nether Brick"},
{texture: 23, name: "113 Nether Brick Fence"},
{texture: 24, name: "114 Nether Brick Stairs"},
{texture: 25, name: "115 Nether Wart"},
{texture: 26, name: "116 Enchantment Table"},
{texture: 27, name: "117 Brewing Stand"},
{texture: 28, name: "118 Cauldron"},
{texture: 29, name: "119 End Portal"},
{texture: 32, name: "120 End Portal Frame"},
{texture: 33, name: "121 End Stone"},
{texture: 34, name: "122 Dragon Egg"},
{texture: 35, name: "123 Redstone Lamp (inactive)"},
{texture: 36, name: "124 Redstone Lamp (active)"},
{texture: 37, name: "125 Double Oak Wood Slab"},
{texture: 38, name: "125:1 Double Spruce Wood Slab"},
{texture: 39, name: "125:2 Double Birch Wood Slab"},
{texture: 40, name: "125:3 Double Jungle Wood Slab"},
{texture: 41, name: "125:4 Double Acacia Wood Slab"},
{texture: 42, name: "125:5 Double Dark Oak Wood Slab"},
{texture: 43, name: "126 Oak Wood Slab"},
{texture: 44, name: "126:1 Spruce Wood Slab"},
{texture: 45, name: "126:2 Birch Wood Slab"},
{texture: 46, name: "126:3 Jungle Wood Slab"},
{texture: 47, name: "126:4 Acacia Wood Slab"},
{texture: 48, name: "126:5 Dark Oak Wood Slab"},
{texture: 49, name: "127 Cocoa"},
{texture: 50, name: "128 Sandstone Stairs"},
{texture: 51, name: "129 Emerald Ore"},
{texture: 53, name: "130 Ender Chest"},
{texture: 54, name: "131 Tripwire Hook"},
{texture: 55, name: "132 Tripwire"},
{texture: 56, name: "133 Emerald Block"},
{texture: 57, name: "134 Spruce Wood Stairs"},
{texture: 58, name: "135 Birch Wood Stairs"},
{texture: 59, name: "136 Jungle Wood Stairs"},
{texture: 60, name: "137 Command Block"},
{texture: 61, name: "138 Beacon"},
{texture: 62, name: "139 Cobblestone Wall"},
{texture: 63, name: "139:1 Mossy Cobblestone Wall"},
{texture: 65, name: "140 Flower Pot"},
{texture: 66, name: "141 Carrots"},
{texture: 67, name: "142 Potatoes"},
{texture: 68, name: "143 Wooden Button"},
{texture: 69, name: "144 Mob Head"},
{texture: 70, name: "145 Anvil"},
{texture: 71, name: "146 Trapped Chest"},
{texture: 72, name: "147 Weighted Pressure Plate (light)"},
{texture: 73, name: "148 Weighted Pressure Plate (heavy)"},
{texture: 74, name: "149 Redstone Comparator (inactive)"},
{texture: 76, name: "150 Redstone Comparator (active)"},
{texture: 77, name: "151 Daylight Sensor"},
{texture: 78, name: "152 Redstone Block"},
{texture: 79, name: "153 Nether Quartz Ore"},
{texture: 80, name: "154 Hopper"},
{texture: 81, name: "155 Quartz Block"},
{texture: 82, name: "155:1 Chiseled Quartz Block"},
{texture: 83, name: "155:2 Pillar Quartz Block"},
{texture: 84, name: "156 Quartz Stairs"},
{texture: 85, name: "157 Activator Rail"},
{texture: 86, name: "158 Dropper"},
{texture: 87, name: "159 White Stained Clay"},
{texture: 88, name: "159:1 Orange Stained Clay"},
{texture: 95, name: "159:2 Magenta Stained Clay"},
{texture: 96, name: "159:3 Light Blue Stained Clay"},
{texture: 97, name: "159:4 Yellow Stained Clay"},
{texture: 98, name: "159:5 Lime Stained Clay"},
{texture: 99, name: "159:6 Pink Stained Clay"},
{texture: 100, name: "159:7 Gray Stained Clay"},
{texture: 101, name: "159:8 Light Gray Stained Clay"},
{texture: 102, name: "159:9 Cyan Stained Clay"},
{texture: 89, name: "159:10 Purple Stained Clay"},
{texture: 90, name: "159:11 Blue Stained Clay"},
{texture: 91, name: "159:12 Brown Stained Clay"},
{texture: 92, name: "159:13 Green Stained Clay"},
{texture: 93, name: "159:14 Red Stained Clay"},
{texture: 94, name: "159:15 Black Stained Clay"},
{texture: 104, name: "160 White Stained Glass Pane"},
{texture: 105, name: "160:1 Orange Stained Glass Pane"},
{texture: 112, name: "160:2 Magenta Stained Glass Pane"},
{texture: 113, name: "160:3 Light Blue Stained Glass Pane"},
{texture: 114, name: "160:4 Yellow Stained Glass Pane"},
{texture: 115, name: "160:5 Lime Stained Glass Pane"},
{texture: 116, name: "160:6 Pink Stained Glass Pane"},
{texture: 117, name: "160:7 Gray Stained Glass Pane"},
{texture: 118, name: "160:8 Light Gray Stained Glass Pane"},
{texture: 119, name: "160:9 Cyan Stained Glass Pane"},
{texture: 106, name: "160:10 Purple Stained Glass Pane"},
{texture: 107, name: "160:11 Blue Stained Glass Pane"},
{texture: 108, name: "160:12 Brown Stained Glass Pane"},
{texture: 109, name: "160:13 Green Stained Glass Pane"},
{texture: 110, name: "160:14 Red Stained Glass Pane"},
{texture: 111, name: "160:15 Black Stained Glass Pane"},
{texture: 120, name: "161 Acacia Leaves"},
{texture: 121, name: "161:1 Dark Oak Leaves"},
{texture: 122, name: "162 Acacia Wood"},
{texture: 123, name: "162:1 Dark Oak Wood"},
{texture: 124, name: "163 Acacia Wood Stairs"},
{texture: 125, name: "164 Dark Oak Wood Stairs"},
{texture: 126, name: "165 Slime Block"},
{texture: 127, name: "166 Barrier"},
{texture: 128, name: "167 Iron Trapdoor"},
{texture: 129, name: "168 Prismarine"},
{texture: 130, name: "168:1 Prismarine Bricks"},
{texture: 131, name: "168:2 Dark Prismarine"},
{texture: 132, name: "169 Sea Lantern"},
{texture: 137, name: "170 Hay Bale"},
{texture: 138, name: "171 White Carpet"},
{texture: 139, name: "171:1 Orange Carpet"},
{texture: 146, name: "171:2 Magenta Carpet"},
{texture: 147, name: "171:3 Light Blue Carpet"},
{texture: 148, name: "171:4 Yellow Carpet"},
{texture: 149, name: "171:5 Lime Carpet"},
{texture: 150, name: "171:6 Pink Carpet"},
{texture: 151, name: "171:7 Gray Carpet"},
{texture: 152, name: "171:8 Light Gray Carpet"},
{texture: 153, name: "171:9 Cyan Carpet"},
{texture: 140, name: "171:10 Purple Carpet"},
{texture: 141, name: "171:11 Blue Carpet"},
{texture: 142, name: "171:12 Brown Carpet"},
{texture: 143, name: "171:13 Green Carpet"},
{texture: 144, name: "171:14 Red Carpet"},
{texture: 145, name: "171:15 Black Carpet"},
{texture: 154, name: "172 Hardened Clay"},
{texture: 155, name: "173 Block of Coal"},
{texture: 156, name: "174 Packed Ice"},
{texture: 157, name: "175 Sunflower"},
{texture: 158, name: "175:1 Lilac"},
{texture: 159, name: "175:2 Double Tallgrass"},
{texture: 160, name: "175:3 Large Fern"},
{texture: 161, name: "175:4 Rose Bush"},
{texture: 162, name: "175:5 Peony"},
{texture: 163, name: "176 Free-standing Banner"},
{texture: 164, name: "177 Wall-mounted Banner"},
{texture: 165, name: "178 Inverted Daylight Sensor"},
{texture: 166, name: "179 Red Sandstone"},
{texture: 167, name: "179:1 Chiseled Red Sandstone"},
{texture: 168, name: "179:2 Smooth Red Sandstone"},
{texture: 173, name: "180 Red Sandstone Stairs"},
{texture: 174, name: "181 Double Red Sandstone Slab"},
{texture: 175, name: "182 Red Sandstone Slab"},
{texture: 176, name: "183 Spruce Fence Gate"},
{texture: 177, name: "184 Birch Fence Gate"},
{texture: 178, name: "185 Jungle Fence Gate"},
{texture: 179, name: "186 Dark Oak Fence Gate"},
{texture: 180, name: "187 Acacia Fence Gate"},
{texture: 181, name: "188 Spruce Fence"},
{texture: 182, name: "189 Birch Fence"},
{texture: 185, name: "190 Jungle Fence"},
{texture: 186, name: "191 Dark Oak Fence"},
{texture: 187, name: "192 Acacia Fence"},
{texture: 188, name: "193 Spruce Door Block"},
{texture: 189, name: "194 Birch Door Block"},
{texture: 190, name: "195 Jungle Door Block"},
{texture: 191, name: "196 Acacia Door Block"},
{texture: 192, name: "197 Dark Oak Door Block"},
{texture: 193, name: "198 End Rod"},
{texture: 194, name: "199 Chorus Plant"},
{texture: 197, name: "200 Chorus Flower"},
{texture: 198, name: "201 Purpur Block"},
{texture: 199, name: "202 Purpur Pillar"},
{texture: 200, name: "203 Purpur Stairs"},
{texture: 201, name: "204 Purpur Double Slab"},
{texture: 202, name: "205 Purpur Slab"},
{texture: 203, name: "206 End Stone Bricks"},
{texture: 204, name: "207 Beetroot Block"},
{texture: 205, name: "208 Grass Path"},
{texture: 206, name: "209 End Gateway"},
{texture: 208, name: "210 Repeating Command Block"},
{texture: 209, name: "211 Chain Command Block"},
{texture: 210, name: "212 Frosted Ice"},
{texture: 211, name: "213 Magma Block"},
{texture: 212, name: "214 Nether Wart Block"},
{texture: 213, name: "215 Red Nether Brick"},
{texture: 214, name: "216 Bone Block"},
{texture: 215, name: "217 Structure Void"},
{texture: 216, name: "218 Observer"},
{texture: 217, name: "219 White Shulker Box"},
{texture: 219, name: "220 Orange Shulker Box"},
{texture: 220, name: "221 Magenta Shulker Box"},
{texture: 221, name: "222 Light Blue Shulker Box"},
{texture: 222, name: "223 Yellow Shulker Box"},
{texture: 223, name: "224 Lime Shulker Box"},
{texture: 224, name: "225 Pink Shulker Box"},
{texture: 229, name: "226 Gray Shulker Box"},
{texture: 238, name: "227 Light Gray Shulker Box"},
{texture: 239, name: "228 Cyan Shulker Box"},
{texture: 240, name: "229 Purple Shulker Box"},
{texture: 242, name: "230 Blue Shulker Box"},
{texture: 243, name: "231 Brown Shulker Box"},
{texture: 244, name: "232 Green Shulker Box"},
{texture: 245, name: "233 Red Shulker Box"},
{texture: 246, name: "234 Black Shulker Box"},
{texture: 251, name: "255 Structure Block"},
{texture: 252, name: "256 Iron Shovel"},
{texture: 253, name: "257 Iron Pickaxe"},
{texture: 254, name: "258 Iron Axe"},
{texture: 255, name: "259 Flint and Steel"},
{texture: 257, name: "260 Apple"},
{texture: 258, name: "261 Bow"},
{texture: 259, name: "262 Arrow"},
{texture: 260, name: "263 Coal"},
{texture: 261, name: "263:1 Charcoal"},
{texture: 262, name: "264 Diamond"},
{texture: 263, name: "265 Iron Ingot"},
{texture: 264, name: "266 Gold Ingot"},
{texture: 265, name: "267 Iron Sword"},
{texture: 266, name: "268 Wooden Sword"},
{texture: 267, name: "269 Wooden Shovel"},
{texture: 269, name: "270 Wooden Pickaxe"},
{texture: 270, name: "271 Wooden Axe"},
{texture: 271, name: "272 Stone Sword"},
{texture: 272, name: "273 Stone Shovel"},
{texture: 273, name: "274 Stone Pickaxe"},
{texture: 274, name: "275 Stone Axe"},
{texture: 275, name: "276 Diamond Sword"},
{texture: 276, name: "277 Diamond Shovel"},
{texture: 277, name: "278 Diamond Pickaxe"},
{texture: 278, name: "279 Diamond Axe"},
{texture: 280, name: "280 Stick"},
{texture: 281, name: "281 Bowl"},
{texture: 282, name: "282 Mushroom Stew"},
{texture: 283, name: "283 Golden Sword"},
{texture: 284, name: "284 Golden Shovel"},
{texture: 285, name: "285 Golden Pickaxe"},
{texture: 286, name: "286 Golden Axe"},
{texture: 287, name: "287 String"},
{texture: 288, name: "288 Feather"},
{texture: 289, name: "289 Gunpowder"},
{texture: 291, name: "290 Wooden Hoe"},
{texture: 292, name: "291 Stone Hoe"},
{texture: 293, name: "292 Iron Hoe"},
{texture: 294, name: "293 Diamond Hoe"},
{texture: 295, name: "294 Golden Hoe"},
{texture: 296, name: "295 Wheat Seeds"},
{texture: 297, name: "296 Wheat"},
{texture: 298, name: "297 Bread"},
{texture: 299, name: "298 Leather Helmet"},
{texture: 300, name: "299 Leather Tunic"},
{texture: 305, name: "300 Leather Pants"},
{texture: 306, name: "301 Leather Boots"},
{texture: 307, name: "302 Chainmail Helmet"},
{texture: 308, name: "303 Chainmail Chestplate"},
{texture: 309, name: "304 Chainmail Leggings"},
{texture: 310, name: "305 Chainmail Boots"},
{texture: 311, name: "306 Iron Helmet"},
{texture: 312, name: "307 Iron Chestplate"},
{texture: 313, name: "308 Iron Leggings"},
{texture: 314, name: "309 Iron Boots"},
{texture: 318, name: "310 Diamond Helmet"},
{texture: 319, name: "311 Diamond Chestplate"},
{texture: 320, name: "312 Diamond Leggings"},
{texture: 321, name: "313 Diamond Boots"},
{texture: 322, name: "314 Golden Helmet"},
{texture: 323, name: "315 Golden Chestplate"},
{texture: 324, name: "316 Golden Leggings"},
{texture: 325, name: "317 Golden Boots"},
{texture: 326, name: "318 Flint"},
{texture: 327, name: "319 Raw Porkchop"},
{texture: 329, name: "320 Cooked Porkchop"},
{texture: 330, name: "321 Painting"},
{texture: 331, name: "322 Golden Apple"},
{texture: 332, name: "322:1 Enchanted Golden Apple"},
{texture: 333, name: "323 Sign"},
{texture: 334, name: "324 Oak Door"},
{texture: 335, name: "325 Bucket"},
{texture: 336, name: "326 Water Bucket"},
{texture: 337, name: "327 Lava Bucket"},
{texture: 338, name: "328 Minecart"},
{texture: 339, name: "329 Saddle"},
{texture: 341, name: "330 Iron Door"},
{texture: 342, name: "331 Redstone"},
{texture: 343, name: "332 Snowball"},
{texture: 344, name: "333 Oak Boat"},
{texture: 345, name: "334 Leather"},
{texture: 346, name: "335 Milk Bucket"},
{texture: 347, name: "336 Brick"},
{texture: 348, name: "337 Clay"},
{texture: 349, name: "338 Sugar Canes"},
{texture: 350, name: "339 Paper"},
{texture: 352, name: "340 Book"},
{texture: 353, name: "341 Slimeball"},
{texture: 354, name: "342 Minecart with Chest"},
{texture: 355, name: "343 Minecart with Furnace"},
{texture: 356, name: "344 Egg"},
{texture: 357, name: "345 Compass"},
{texture: 358, name: "346 Fishing Rod"},
{texture: 359, name: "347 Clock"},
{texture: 360, name: "348 Glowstone Dust"},
{texture: 361, name: "349 Raw Fish"},
{texture: 362, name: "349:1 Raw Salmon"},
{texture: 363, name: "349:2 Clownfish"},
{texture: 364, name: "349:3 Pufferfish"},
{texture: 381, name: "350 Cooked Fish"},
{texture: 382, name: "350:1 Cooked Salmon"},
{texture: 383, name: "351 Ink Sack"},
{texture: 384, name: "351:1 Rose Red"},
{texture: 391, name: "351:2 Cactus Green"},
{texture: 392, name: "351:3 Coco Beans"},
{texture: 393, name: "351:4 Lapis Lazuli"},
{texture: 394, name: "351:5 Purple Dye"},
{texture: 395, name: "351:6 Cyan Dye"},
{texture: 396, name: "351:7 Light Gray Dye"},
{texture: 397, name: "351:8 Gray Dye"},
{texture: 398, name: "351:9 Pink Dye"},
{texture: 385, name: "351:10 Lime Dye"},
{texture: 386, name: "351:11 Dandelion Yellow"},
{texture: 387, name: "351:12 Light Blue Dye"},
{texture: 388, name: "351:13 Magenta Dye"},
{texture: 389, name: "351:14 Orange Dye"},
{texture: 390, name: "351:15 Bone Meal"},
{texture: 399, name: "352 Bone"},
{texture: 400, name: "353 Sugar"},
{texture: 401, name: "354 Cake"},
{texture: 402, name: "355 Bed"},
{texture: 403, name: "356 Redstone Repeater"},
{texture: 404, name: "357 Cookie"},
{texture: 405, name: "358 Map"},
{texture: 406, name: "359 Shears"},
{texture: 407, name: "360 Melon"},
{texture: 408, name: "361 Pumpkin Seeds"},
{texture: 409, name: "362 Melon Seeds"},
{texture: 410, name: "363 Raw Beef"},
{texture: 411, name: "364 Steak"},
{texture: 412, name: "365 Raw Chicken"},
{texture: 413, name: "366 Cooked Chicken"},
{texture: 414, name: "367 Rotten Flesh"},
{texture: 415, name: "368 Ender Pearl"},
{texture: 416, name: "369 Blaze Rod"},
{texture: 418, name: "370 Ghast Tear"},
{texture: 419, name: "371 Gold Nugget"},
{texture: 420, name: "372 Nether Wart"},
{texture: 421, name: "373 Potion"},
{texture: 422, name: "374 Glass Bottle"},
{texture: 423, name: "375 Spider Eye"},
{texture: 424, name: "376 Fermented Spider Eye"},
{texture: 425, name: "377 Blaze Powder"},
{texture: 426, name: "378 Magma Cream"},
{texture: 427, name: "379 Brewing Stand"},
{texture: 437, name: "380 Cauldron"},
{texture: 438, name: "381 Eye of Ender"},
{texture: 439, name: "382 Glistering Melon"},
{texture: 454, name: "383:4 Spawn Elder Guardian"},
{texture: 455, name: "383:5 Spawn Wither Skeleton"},
{texture: 465, name: "383:6 Spawn Stray"},
{texture: 445, name: "383:23 Spawn Husk"},
{texture: 446, name: "383:27 Spawn Zombie Villager"},
{texture: 447, name: "383:28 Spawn Skeleton Horse"},
{texture: 448, name: "383:29 Spawn Zombie Horse"},
{texture: 449, name: "383:31 Spawn Donkey"},
{texture: 450, name: "383:32 Spawn Mule"},
{texture: 451, name: "383:34 Spawn Evoker"},
{texture: 452, name: "383:35 Spawn Vex"},
{texture: 453, name: "383:36 Spawn Vindicator"},
{texture: 456, name: "383:50 Spawn Creeper"},
{texture: 457, name: "383:51 Spawn Skeleton"},
{texture: 458, name: "383:52 Spawn Spider"},
{texture: 459, name: "383:54 Spawn Zombie"},
{texture: 460, name: "383:55 Spawn Slime"},
{texture: 461, name: "383:56 Spawn Ghast"},
{texture: 462, name: "383:57 Spawn Zombie Pigman"},
{texture: 463, name: "383:58 Spawn Enderman"},
{texture: 464, name: "383:59 Spawn Cave Spider"},
{texture: 466, name: "383:60 Spawn Silverfish"},
{texture: 467, name: "383:61 Spawn Blaze"},
{texture: 468, name: "383:62 Spawn Magma Cube"},
{texture: 469, name: "383:65 Spawn Bat"},
{texture: 470, name: "383:66 Spawn Witch"},
{texture: 471, name: "383:67 Spawn Endermite"},
{texture: 472, name: "383:68 Spawn Guardian"},
{texture: 473, name: "383:69 Spawn Shulker"},
{texture: 474, name: "383:90 Spawn Pig"},
{texture: 475, name: "383:91 Spawn Sheep"},
{texture: 476, name: "383:92 Spawn Cow"},
{texture: 477, name: "383:93 Spawn Chicken"},
{texture: 478, name: "383:94 Spawn Squid"},
{texture: 479, name: "383:95 Spawn Wolf"},
{texture: 480, name: "383:96 Spawn Mooshroom"},
{texture: 481, name: "383:98 Spawn Ocelot"},
{texture: 440, name: "383:100 Spawn Horse"},
{texture: 441, name: "383:101 Spawn Rabbit"},
{texture: 442, name: "383:102 Spawn Polar Bear"},
{texture: 443, name: "383:103 Spawn Llama"},
{texture: 444, name: "383:120 Spawn Villager"},
{texture: 482, name: "384 Bottle o' Enchanting"},
{texture: 483, name: "385 Fire Charge"},
{texture: 484, name: "386 Book and Quill"},
{texture: 485, name: "387 Written Book"},
{texture: 486, name: "388 Emerald"},
{texture: 487, name: "389 Item Frame"},
{texture: 489, name: "390 Flower Pot"},
{texture: 490, name: "391 Carrot"},
{texture: 491, name: "392 Potato"},
{texture: 492, name: "393 Baked Potato"},
{texture: 493, name: "394 Poisonous Potato"},
{texture: 494, name: "395 Empty Map"},
{texture: 495, name: "396 Golden Carrot"},
{texture: 496, name: "397 Mob Head (Skeleton)"},
{texture: 497, name: "397:1 Mob Head (Wither Skeleton)"},
{texture: 498, name: "397:2 Mob Head (Zombie)"},
{texture: 499, name: "397:3 Mob Head (Human)"},
{texture: 500, name: "397:4 Mob Head (Creeper)"},
{texture: 501, name: "397:5 Mob Head (Dragon)"},
{texture: 502, name: "398 Carrot on a Stick"},
{texture: 503, name: "399 Nether Star"},
{texture: 506, name: "400 Pumpkin Pie"},
{texture: 507, name: "401 Firework Rocket"},
{texture: 508, name: "402 Firework Star"},
{texture: 509, name: "403 Enchanted Book"},
{texture: 510, name: "404 Redstone Comparator"},
{texture: 511, name: "405 Nether Brick"},
{texture: 512, name: "406 Nether Quartz"},
{texture: 513, name: "407 Minecart with TNT"},
{texture: 514, name: "408 Minecart with Hopper"},
{texture: 515, name: "409 Prismarine Shard"},
{texture: 517, name: "410 Prismarine Crystals"},
{texture: 518, name: "411 Raw Rabbit"},
{texture: 519, name: "412 Cooked Rabbit"},
{texture: 520, name: "413 Rabbit Stew"},
{texture: 521, name: "414 Rabbit's Foot"},
{texture: 522, name: "415 Rabbit Hide"},
{texture: 523, name: "416 Armor Stand"},
{texture: 524, name: "417 Iron Horse Armor"},
{texture: 525, name: "418 Golden Horse Armor"},
{texture: 526, name: "419 Diamond Horse Armor"},
{texture: 528, name: "420 Lead"},
{texture: 529, name: "421 Name Tag"},
{texture: 530, name: "422 Minecart with Command Block"},
{texture: 531, name: "423 Raw Mutton"},
{texture: 532, name: "424 Cooked Mutton"},
{texture: 533, name: "425 Banner"},
{texture: 534, name: "427 Spruce Door"},
{texture: 535, name: "428 Birch Door"},
{texture: 536, name: "429 Jungle Door"},
{texture: 545, name: "430 Acacia Door"},
{texture: 546, name: "431 Dark Oak Door"},
{texture: 547, name: "432 Chorus Fruit"},
{texture: 548, name: "433 Popped Chorus Fruit"},
{texture: 549, name: "434 Beetroot"},
{texture: 550, name: "435 Beetroot Seeds"},
{texture: 551, name: "436 Beetroot Soup"},
{texture: 552, name: "437 Dragon's Breath"},
{texture: 553, name: "438 Splash Potion"},
{texture: 554, name: "439 Spectral Arrow"},
{texture: 563, name: "440 Tipped Arrow"},
{texture: 564, name: "441 Lingering Potion"},
{texture: 565, name: "442 Shield"},
{texture: 566, name: "443 Elytra"},
{texture: 567, name: "444 Spruce Boat"},
{texture: 568, name: "445 Birch Boat"},
{texture: 569, name: "446 Jungle Boat"},
{texture: 570, name: "447 Acacia Boat"},
{texture: 571, name: "448 Dark Oak Boat"},
{texture: 572, name: "449 Totem of Undying"},
{texture: 574, name: "450 Shulker Shell"},
{texture: 575, name: "452 Iron Nugget"},
{texture: 225, name: "2256 13 Disc"},
{texture: 226, name: "2257 Cat Disc"},
{texture: 227, name: "2258 Blocks Disc"},
{texture: 228, name: "2259 Chirp Disc"},
{texture: 230, name: "2260 Far Disc"},
{texture: 231, name: "2261 Mall Disc"},
{texture: 232, name: "2262 Mellohi Disc"},
{texture: 233, name: "2263 Stal Disc"},
{texture: 234, name: "2264 Strad Disc"},
{texture: 235, name: "2265 Ward Disc"},
{texture: 236, name: "2266 11 Disc"},
{texture: 237, name: "2267 Wait Disc"}
]