<template>
    <div class="card">
        <div class="card-head">
            <h3>#{{info.id}} <span class="cap">{{info.species.name}}</span></h3>
        </div>
        <div class="card-body">
            <img :src="info.sprites.front_default" />
            <!-- <img :src="info.sprites.back_default" /> -->
            <span v-for="(type, index) in info.types" :key="type.slot" class="cap type">
                <span
                class="class"
                :class="{
                    normal:type.type.name=='normal',
                    fire:type.type.name=='fire',
                    fighting:type.type.name=='fighting',
                    water:type.type.name=='water',
                    flying:type.type.name=='flying',
                    grass:type.type.name=='grass',
                    poison:type.type.name=='poison',
                    electric:type.type.name=='electric',
                    ground:type.type.name=='ground',
                    psychic:type.type.name=='psychic',
                    rock:type.type.name=='rock',
                    ice:type.type.name=='ice',
                    bug:type.type.name=='bug',
                    dragon:type.type.name=='dragon',
                    ghost:type.type.name=='ghost',
                    dark: type.type.name=='dark',
                    steel: type.type.name=='steel',
                    fairy: type.type.name=='fairy'
                }">{{type.type.name}}</span>
                <span v-if="index != info.types.length-1">/ </span>
            </span>

            <table>
                <thead>
                    <tr>
                        <th colspan="2">Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="hp">HP</th>
                        <td>{{info.stats[5].base_stat}}</td>
                    </tr>
                    <tr>
                        <th class="atk">Attack</th>
                        <td>{{info.stats[4].base_stat}}</td>
                    </tr>
                    <tr>
                        <th class="def">Defense</th>
                        <td>{{info.stats[3].base_stat}}</td>
                    </tr>
                    <tr>
                        <th class="satk">Special Attack</th>
                        <td>{{info.stats[2].base_stat}}</td>
                    </tr>
                    <tr>
                        <th class="sdef">Special Defense</th>
                        <td>{{info.stats[1].base_stat}}</td>
                    </tr>
                    <tr>
                        <th class="spd">Speed</th>
                        <td>{{info.stats[0].base_stat}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonDetail",
    props: ["info"],
    data() {
        return {
        }
    },
    methods: {
      
    }
}
</script>

<style scoped>
    img {
        float: left;
    }
    .cap {
        text-transform: capitalize;
    }

    .hp {
        color: #f00;
    }
    .atk {
        color: #f08030;
    }
    .def {
        color: #f8d030;
    }
    .satk {
        color: #6890f0;
    }
    .sdef {
        color: #78c850;
    }
    .spd {
        color: #f85888;
    }

    .class {
        font-weight: 500;
    }
    .normal {
        color: #a8a878;
    }
    .fire {
        color: #f08030;
    }
    .fighting {
        color: #c03028;
    }
    .water {
        color: #6890f0;
    }
    .flying {
        color: #a890f0;
    }
    .grass {
        color: #78c850;
    }
    .poison {
        color: #a040a0;
    }
    .electric {
        color: #f8d030;
    }
    .ground {
        color: #e0c068;
    }
    .psychic {
        color: #f85888;
    }
    .rock {
        color: #b8a038;
    }
    .ice {
        color: #98d8d8;
    }
    .bug {
        color: #a8b820;
    }
    .dragon {
        color: #7038f8;
    }
    .ghost {
        color: #705898;
    }
    .dark {
        color: #705848;
    }
    .steel {
        color: #b8b8d0;
    }
    .fairy {
        color: #ee99ac;
    }
</style>
