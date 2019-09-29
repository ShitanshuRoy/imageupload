import * as api from "../utils/api";

export async function getRepos() {
  try {
    const result = await api.get("user/repos");
    return result;
  } catch (error) {
    return { error };
  }
}

export async function getRepoContent(owner, repo) {
  try {
    const result = await api.get(`/repos/${owner}/${repo}/contents/`);
    return result;
  } catch (error) {
    return { error };
  }
}
export async function uploadFile(owner, repo, path, data) {
  try {
    const result = await api.put(
      `repos/${owner}/${repo}/contents/${path}`,
      data
    );
    return result;
  } catch (error) {
    return { error };
  }
}
