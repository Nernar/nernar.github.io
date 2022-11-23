/**
 * @since 2.0.2b20
 */
declare class ShaderUniformSet {
    lock(): ShaderUniformSet;
    unlock(): ShaderUniformSet;
    setUniformValueArr(uniformSet: string, uniformName: string, value: number[]): ShaderUniformSet;
    setUniformValue(uniformSet: string, uniformName: string, ...value: number[]): ShaderUniformSet;
}
