<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

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
