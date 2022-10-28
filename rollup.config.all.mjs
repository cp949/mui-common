import { createRollupConfig } from './rollup.config.base.mjs'

// export default ['es', 'cjs'].map((it) => createRollupConfig(it))
export default ['es'].map((it) => createRollupConfig(it))
