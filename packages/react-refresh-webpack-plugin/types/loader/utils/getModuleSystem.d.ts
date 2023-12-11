export = getModuleSystem;
/**
 * Infers the current active module system from loader context and options.
 * @this {import('webpack').loader.LoaderContext}
 * @param {import('webpack').ModuleFilenameHelpers} ModuleFilenameHelpers Webpack's module filename helpers.
 * @param {import('../types').NormalizedLoaderOptions} options The normalized loader options.
 * @return {Promise<'esm' | 'cjs'>} The inferred module system.
 */
declare function getModuleSystem(ModuleFilenameHelpers: typeof import("webpack").ModuleFilenameHelpers, options: import('../types').NormalizedLoaderOptions): Promise<'esm' | 'cjs'>;
